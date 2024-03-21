import { DashboardNav } from "@/components/dashboard-nav";
import { navItems } from "@/constants/data";
import { cn } from "@/lib/utils";
import Header from "./header";
import { UserNav } from "./user-nav";
import ThemeToggle from "./ThemeToggle/theme-toggle";
import { Divide, PenSquare, User2 } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";


export default function Sidebar() {
  return (
    <nav
      className={cn(`relative hidden h-screen border-r  lg:block w-72`)}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h2 className="mb-2 px-3 text-2xl font-bold tracking-tight">
              2Fund
            </h2>
            <DashboardNav items={navItems} />
            <div className="py-3">
              <Link href="/dashboard/campaign/create">
                <Button className="w-full">
                  <PenSquare size={"1.2em"} />&nbsp;
                  Create Campaign
                </Button>
              </Link>
            </div>
            <div className="absolute bottom-0 left-0 right-0 py-4 px-3 border-t">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <UserNav />
                  <div className="ms-2">
                    <div className="text-sm font-semibold">Son Tung MTP</div>
                  </div>
                </div>
                <ThemeToggle />
              </div>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
