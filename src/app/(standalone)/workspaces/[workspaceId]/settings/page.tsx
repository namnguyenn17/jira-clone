import { getUser } from "@/features/auth/queries";
import { UpdateWorkspaceForm } from "@/features/workspaces/components/update-workspace-form";
import { getWorkspace } from "@/features/workspaces/queries";
import { PATHS } from "@/utils/paths";
import { redirect } from "next/navigation";

interface WorkspaceSettingsPageProps {
  params: {
    workspaceId: string;
  };
}
const WorkspaceSettingsPage = async ({
  params
}: WorkspaceSettingsPageProps) => {
  const user = await getUser();

  if (!user) {
    redirect(PATHS.SIGN_IN);
  }
  const initialValues = await getWorkspace({ workspaceId: params.workspaceId });
  if (!initialValues) {
    redirect(`${PATHS.WORKSPACES}/${params.workspaceId}`);
  }

  return (
    <div className="w-full lg:max-w-xl">
      <UpdateWorkspaceForm initialValues={initialValues} />
    </div>
  );
};

export default WorkspaceSettingsPage;
