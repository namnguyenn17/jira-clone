import { getUser } from "@/features/auth/queries";
import { UpdateProjectForm } from "@/features/projects/components/update-project-form";
import { getProject } from "@/features/projects/queries";
import { UpdateWorkspaceForm } from "@/features/workspaces/components/update-workspace-form";
import { getWorkspace } from "@/features/workspaces/queries";
import { PATHS } from "@/utils/paths";
import { redirect } from "next/navigation";

interface ProjectIdSettingsPageProps {
  params: {
    projectId: string;
  };
}
const ProjectIdSettingsPage = async ({
  params
}: ProjectIdSettingsPageProps) => {
  const user = await getUser();

  if (!user) {
    redirect(PATHS.SIGN_IN);
  }

  const { projectId } = params;
  const initialValues = await getProject({ projectId });

  return (
    <div className="w-full lg:max-w-xl">
      <UpdateProjectForm initialValues={initialValues} />
    </div>
  );
};

export default ProjectIdSettingsPage;
