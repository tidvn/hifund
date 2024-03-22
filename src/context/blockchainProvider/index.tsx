import type { FC } from "react";
import { SolanaProvider } from "./solana";

type Props = {
  children?: React.ReactNode;
};
export const BlockchainProvider: FC<Props> = ({ children }: Props) => {
  return <SolanaProvider>{children}</SolanaProvider>;
};
