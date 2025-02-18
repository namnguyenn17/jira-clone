import { PATHS } from "@/utils/paths";
import Image from "next/image";
import Link from "next/link";
import { DottedSeparator } from "./dotted-separator";
import { Navigation } from "./navigation";
import { WorkspaceSwitcher } from "./workspace-switcher";
import { ProjectsList } from "./projects-list";

export const Sidebar = () => {
  return (
    <aside className="w-full h-full bg-neutral-100 p-4">
      <Link href={PATHS.DASHBOARD} className="flex justify-center">
        <Image src="/logo.svg" alt="Logo" width={56} height={56} />
      </Link>
      <DottedSeparator className="my-4" />
      <WorkspaceSwitcher />
      <DottedSeparator className="my-4" />
      <Navigation />
      <DottedSeparator className="my-4" />
      <ProjectsList />
    </aside>
  );
};
