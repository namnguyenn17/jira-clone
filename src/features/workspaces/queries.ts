"use server";

import { createSessionClient } from "@/lib/appwrite";
import { DATABASE_ID, MEMBER_ID, WORKSPACE_ID } from "@/utils/config";
import { Query } from "node-appwrite";
import { getMember } from "../members/queries";
import { Workspace } from "./type";

export const getWorkspaces = async () => {
  try {
    const { account, databases } = await createSessionClient();
    const user = await account.get();

    const members = await databases.listDocuments(DATABASE_ID, MEMBER_ID, [
      Query.equal("userId", user.$id)
    ]);

    if (!members.documents.length) {
      return { documents: [], total: 0 };
    }

    const workspaceIds = members.documents.map((member) => member.workspaceId);

    const workspaces = await databases.listDocuments(
      DATABASE_ID,
      WORKSPACE_ID,
      [Query.orderDesc("$createdAt"), Query.contains("$id", workspaceIds)]
    );

    return workspaces;
  } catch {
    return { documents: [], total: 0 };
  }
};

interface GetWorkspaceProps {
  workspaceId: string;
}
export const getWorkspace = async ({ workspaceId }: GetWorkspaceProps) => {
  try {
    const { account, databases } = await createSessionClient();
    const user = await account.get();

    const member = await getMember({
      databases,
      workspaceId,
      userId: user.$id
    });

    if (!member) {
      return null;
    }

    const workspace = await databases.getDocument<Workspace>(
      DATABASE_ID,
      WORKSPACE_ID,
      workspaceId
    );

    return workspace;
  } catch {
    return null;
  }
};

interface GetWorkspaceInfoProps {
  workspaceId: string;
}
export const getWorkspaceInfo = async ({
  workspaceId
}: GetWorkspaceInfoProps) => {
  try {
    const { databases } = await createSessionClient();

    const workspace = await databases.getDocument<Workspace>(
      DATABASE_ID,
      WORKSPACE_ID,
      workspaceId
    );

    return {
      name: workspace.name
    };
  } catch {
    return null;
  }
};
