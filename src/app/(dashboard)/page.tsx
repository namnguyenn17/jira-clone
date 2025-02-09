import { getUser } from "@/features/auth/actions";
import CreateWorkspaceForm from "@/features/workspaces/components/create-workspace-form";
import { PATHS } from "@/utils/paths";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getUser();

  if (!user) {
    redirect(PATHS.SIGN_IN);
  }

  return (
    <div className="bg-neutral-500 p-4 h-full">
      <CreateWorkspaceForm />
    </div>
  );
}
