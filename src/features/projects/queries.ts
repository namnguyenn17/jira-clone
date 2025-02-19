import { createSessionClient } from "@/lib/appwrite";

import { Project } from "./types";
import { getMember } from "@/features/members/queries";
import { DATABASE_ID, PROJECTS_ID } from "@/utils/config";

interface GetprojectProps {
  projectId: string;
}

export const getProject = async ({ projectId }: GetprojectProps) => {
  const { databases, account } = await createSessionClient();

  const user = await account.get();

  const project = await databases.getDocument<Project>(
    DATABASE_ID,
    PROJECTS_ID,
    projectId
  );

  const member = await getMember({
    databases,
    userId: user.$id,
    workspaceId: project.workspaceId
  });

  if (!member) {
    throw new Error("Unauthorized");
  }

  return project;
};
