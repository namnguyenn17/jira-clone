import { getUser } from "@/features/auth/queries";
import { JoinWorkspaceForm } from "@/features/workspaces/components/join-workspace-form";
import { getWorkspaceInfo } from "@/features/workspaces/queries";
import { PATHS } from "@/utils/paths";
import { redirect } from "next/navigation";

interface WorkspaceIdJoinPageProps {
  params: {
    workspaceId: string;
  };
}
const WorkspaceIdJoinPage = async ({ params }: WorkspaceIdJoinPageProps) => {
  const user = await getUser();

  if (!user) {
    redirect(PATHS.SIGN_IN);
  }

  const initialValues = await getWorkspaceInfo({
    workspaceId: params.workspaceId
  });

  if (!initialValues) {
    redirect(PATHS.DASHBOARD);
  }

  return (
    <div className="w-full lg:max-w-2xl">
      <JoinWorkspaceForm initialValues={initialValues} />
    </div>
  );
};

export default WorkspaceIdJoinPage;
