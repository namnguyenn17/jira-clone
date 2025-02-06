"use client";

import { Button } from "@/components/ui/button";
import { useCurrent } from "@/features/auth/api/use-current";
import { useLogout } from "@/features/auth/api/use-logout";
import { PATHS } from "@/lib/paths";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useCurrent();
  const { mutate } = useLogout();

  useEffect(() => {
    if (!data && !isLoading) {
      router.push(PATHS.SIGN_IN);
    }
  }, [data]);

  return (
    <div className="flex gap-4">
      Only logged in users can access this page.
      <Button onClick={() => mutate()}>Logout</Button>
    </div>
  );
}
