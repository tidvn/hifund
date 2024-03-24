"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { BlockchainProvider } from "@/context/blockchainProvider";

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <BlockchainProvider>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </BlockchainProvider>
  );
}
