"use client";
import { Button } from "@/components/ui/button";
import { PATHS } from "@/utils/paths";
import { AlertTriangle, Loader } from "lucide-react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="h-full flex flex-col gap-y-2 items-center justify-center">
      <AlertTriangle className="size-6 text-muted-foreground" />
      <p className="text-sm text-muted-foreground">Something went wrong</p>
      <Button variant={"secondary"} size={"sm"}>
        <Link href={PATHS.DASHBOARD}>Back to home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
