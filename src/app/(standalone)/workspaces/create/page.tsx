import { getUser } from "@/features/auth/queries";
import { CreateWorkspaceForm } from "@/features/workspaces/components/create-workspace-form";
import { PATHS } from "@/utils/paths";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const WorkspaceCreatePage = async () => {
  const user = await getUser();

  if (!user) {
    redirect(PATHS.SIGN_IN);
  }
  return (
    <Suspense>
      <div className="w-full lg:max-w-xl">
        <CreateWorkspaceForm />
      </div>
    </Suspense>
  );
};

export default WorkspaceCreatePage;
