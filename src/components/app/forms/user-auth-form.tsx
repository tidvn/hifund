"use client";
import { ConnectWalletButton } from "@/components/common/connect-wallet-button";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { apiGet } from "@/lib/axios";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { isNil } from "lodash";
import * as bs58 from "bs58";
export default function UserAuthForm() {
  const wallet = useWallet();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const [loading, setLoading] = useState(false);
  const handleSignIn = async () => {
    setLoading(true);
    try {
      if (
        !wallet ||
        !wallet.connected ||
        !wallet.signMessage ||
        !wallet.publicKey
      ) {
        throw new Error("Wallet not connected");
      }
      const walletAddress = wallet.publicKey.toBase58();
      const { data: responseData } = await apiGet(
        `/api/auth/get-nonce?walletAddress=${walletAddress}`,
      );
      const nonce = responseData.nonce;

      if (isNil(nonce)) {
        throw new Error("cant get nonce at the moment");
      }

      const signature = bs58.encode(
        await wallet.signMessage(new TextEncoder().encode(nonce)),
      );

      await signIn("credentials", {
        walletAddress,
        signature,
        callbackUrl: callbackUrl ?? "/dashboard",
      });
    } catch (error) {
      console.error("Error signing in", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative">
        <div className="relative flex justify-center text-xs uppercase">
          <ConnectWalletButton.solana className="bg-cover bg-black" />
        </div>
      </div>
      <Button onClick={handleSignIn} disabled={loading}>
        Login
      </Button>
    </>
  );
}
