import { NextAuthOptions } from "next-auth";
import * as bs58 from 'bs58';
import * as nacl from 'tweetnacl';
import CredentialProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: "Solana",
      credentials: {
        walletAddress: {
          label: "Wallet Address",
          type: "text",
          placeholder: "0x0",
        },
        signature: {
          label: "Signature",
          type: "text",
          placeholder: "0x0",
        },
      },
      async authorize(credentials) {
        try {

          const { walletAddress, signature } = credentials || {};
          if (!walletAddress || !signature) {
            return null
          }

          const nonce: any = await global.cacheUser.get(`nonce-${walletAddress}`)
          const result = await nacl.sign.detached.verify(
            new TextEncoder().encode(nonce),
            bs58.decode(signature),
            bs58.decode(walletAddress),
          );
          if (result) {
            return {
              id: walletAddress,
              name: walletAddress,
              email: `${walletAddress}@felic.xyz`,
            }
          }
          return null
        } catch (e) {
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: "/", //sigin page
  },
};
