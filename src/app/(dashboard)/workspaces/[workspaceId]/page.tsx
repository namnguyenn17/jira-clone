import { getUser } from "@/features/auth/queries";
import { PATHS } from "@/utils/paths";
import { redirect } from "next/navigation";

const WorkspaceIdPage = async () => {
  const user = await getUser();

  if (!user) {
    redirect(PATHS.SIGN_IN);
  }

  return <div>Workspace ID</div>;
};

export default WorkspaceIdPage;
