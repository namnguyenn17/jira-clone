"use client";

import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { cn } from "@/lib/utils";
import { PATHS } from "@/utils/paths";
import { SettingsIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill
} from "react-icons/go";

const routes = [
  {
    label: "Home",
    href: PATHS.DASHBOARD,
    icon: GoHome,
    activeIcon: GoHomeFill
  },
  {
    label: "My Tasks",
    href: PATHS.TASKS,
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill
  },
  {
    label: "Settings",
    href: PATHS.SETTINGS,
    icon: SettingsIcon,
    activeIcon: SettingsIcon
  },
  {
    label: "Members",
    href: PATHS.MEMBERS,
    icon: UserIcon,
    activeIcon: UserIcon
  }
];

export const Navigation = () => {
  const workspaceId = useWorkspaceId();
  const pathname = usePathname();

  return (
    <ul>
      {routes.map((item) => {
        const fullHref = `${PATHS.WORKSPACES}/${workspaceId}${item.href}`;
        const isActive = pathname === fullHref;
        const Icon = isActive ? item.activeIcon : item.icon;

        return (
          <Link key={item.label} href={fullHref}>
            <div
              className={cn(
                "flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500",
                isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
              )}
            >
              <Icon className="size-5 text-neutral-500" />
              {item.label}
            </div>
          </Link>
        );
      })}
    </ul>
  );
};
