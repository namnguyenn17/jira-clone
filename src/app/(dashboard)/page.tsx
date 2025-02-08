import { getUser } from "@/features/auth/actions";
import { UserButton } from "@/features/auth/components/user-button";
import { PATHS } from "@/lib/paths";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getUser();

  if (!user) {
    redirect(PATHS.SIGN_IN);
  }

  return <div className="flex gap-4">This is the dashboard home page.</div>;
}
