import type { FC } from "react";
import React, { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

import { clusterApiUrl } from "@solana/web3.js";
import { BLOCKCHAIN_NETWORK } from "@/const/app.const";
import { SolanaNetworkModeEnum } from "@/types";

type Props = {
  children?: React.ReactNode;
};
export const SolanaProvider: FC<Props> = ({ children }: Props) => {
  const network =
    SolanaNetworkModeEnum[
      BLOCKCHAIN_NETWORK as keyof typeof SolanaNetworkModeEnum
    ];

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(() => [], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
