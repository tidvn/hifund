import { NextResponse, NextRequest } from "next/server";
import { v4 as uuid } from 'uuid';

export async function GET(request: NextRequest) {
    const walletAddress = await request.nextUrl.searchParams.get('walletAddress');
    let nonce = await global.cacheUser.get(`nonce-${walletAddress}`);

    if (!nonce) {
        nonce = uuid();
        await global.cacheUser.set(`nonce-${walletAddress}`, nonce);
    }

    return NextResponse.json({
        nonce: nonce,
    });
}
