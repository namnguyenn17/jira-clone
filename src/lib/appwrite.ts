import "server-only";

import { Account, Client, Databases, Storage, Users } from "node-appwrite";

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setKey(process.env.NEXT_APPWRITE_KEY!);

  const account = new Account(client);
  const storage = new Storage(client);
  const users = new Users(client);
  const databases = new Databases(client);

  return { account, storage, users, databases };
}
