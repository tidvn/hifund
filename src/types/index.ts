import { Icons } from "@/components/common/icons";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

export enum BlockchainType {
  SOLANA = "solana",
  CARDANO = "cardano",
  ALEO = "aleo",
  SHADERUM = "shaderum",
  NONE = "none",
}

export enum SolanaNetworkModeEnum {
  DEV_NET = "devnet",
  TEST_NET = "testnet",
  MAIN_NET = "mainnet-beta",
}
