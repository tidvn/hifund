import { Metadata } from "next";
import Link from "next/link";
import UserAuthForm from "@/components/app/forms/user-auth-form";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import bg from "@/public/images/bglogin.jpg";
export const metadata: Metadata = {
  title: "2Fund",
  description: "Flash Funding Platform",
};

export default function AuthenticationPage() {
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/examples/authentication"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 hidden top-4 md:right-8 md:top-8",
        )}
      >
        Login
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex bg-zinc-900">
        <img src={bg.src} alt="" className="absolute inset-0 " />
        <div className="relative z-20 flex items-center  font-bold text-3xl">
          2Fund

        </div>

        <div className="relative z-20 mt-auto">
          
          <blockquote className="space-y-2">
            <p className="text-lg text-justify italic">
              &ldquo;This Flash Funding Platform Centralize, the flash fund
              mechanism as  the platform's foundational feature. This model supports quick funding for
              projects with immediate needs, facilitating a dynamic and responsive funding environment.
              It’s designed to be flexible and applicable across various markets, ensuring broad usability .&rdquo;
            </p>
            <footer className="text-md text-right">~ 2Fund Team ~</footer>
          </blockquote>
        </div>
      </div>
      <div className="relative p-4 lg:p-8 h-full flex items-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            
            <h1 className="text-2xl font-semibold tracking-tight">
              Connect wallet to join in
            </h1>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
}
