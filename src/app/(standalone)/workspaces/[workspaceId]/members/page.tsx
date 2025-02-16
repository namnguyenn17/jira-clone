import { getUser } from "@/features/auth/queries";
import { MembersList } from "@/features/members/components/members-list";
import { PATHS } from "@/utils/paths";
import { redirect } from "next/navigation";

const WorkspaceIdMembersPage = async () => {
  const user = await getUser();

  if (!user) {
    redirect(PATHS.SIGN_IN);
  }

  return (
    <div className="w-full lg:max-w-2xl">
      <MembersList />
    </div>
  );
};

export default WorkspaceIdMembersPage;
