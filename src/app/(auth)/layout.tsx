"use client";

import { Button } from "@/components/ui/button";
import { PATHS } from "@/lib/paths";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname();
  const isSignUpPage = pathname === PATHS.SIGN_UP;

  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src="/logo.svg" alt="Logo" width={56} height={56} />
          <Button asChild variant="secondary">
            <Link href={isSignUpPage ? PATHS.SIGN_IN : PATHS.SIGN_UP}>
              {isSignUpPage ? "Log In" : "Sign Up"}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
