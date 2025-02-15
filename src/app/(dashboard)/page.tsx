import { getUser } from "@/features/auth/queries";
import { getWorkspaces } from "@/features/workspaces/queries";
import { PATHS } from "@/utils/paths";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getUser();

  if (!user) {
    redirect(PATHS.SIGN_IN);
  }

  const workspaces = await getWorkspaces();
  if (workspaces.total === 0) {
    redirect(PATHS.CREATE_WORKSPACE);
  } else {
    redirect(`${PATHS.WORKSPACES}/${workspaces.documents[0].$id}`);
  }
}
