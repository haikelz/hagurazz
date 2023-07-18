"use client";

import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import {
  IconAddressBook,
  IconCategory,
  IconListDetails,
  IconNotes,
  IconTags,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cxm } from "~lib/helpers";
import { spaceGrotesk } from "~lib/utils/fonts";
import Menu from "./Menu";

const topNavList = [
  { id: 1, route: "/works", icon: IconListDetails },
  { id: 2, route: "/notes", icon: IconNotes },
  { id: 3, route: "/tags", icon: IconTags },
  { id: 4, route: "/guestbook", icon: IconAddressBook },
];

export default function NavigationMenu() {
  const pathname = usePathname();

  return (
    <Menu
      menuIcon={
        <button className="mr-6" type="button" aria-label="menu">
          <IconCategory size={22} />
        </button>
      }
      list={topNavList.map((item) => {
        const Icon = item.icon;
        return (
          <Link key={item.id} href={item.route}>
            <DropdownMenuItem
              className={cxm(
                "flex items-center justify-start",
                "space-x-2 rounded-md p-2",
                "font-semibold outline-none transition-all",
                "data-[highlighted]:bg-red data-[highlighted]:text-gray-100",
                "dark:data-[highlighted]:bg-blue-500"
              )}
            >
              <Icon size={22} />
              <span
                className={cxm(
                  pathname?.includes(item.route)
                    ? "font-bold underline decoration-dashed underline-offset-[5px]"
                    : "",
                  spaceGrotesk.className
                )}
              >
                {item.route}
              </span>
            </DropdownMenuItem>
          </Link>
        );
      })}
    />
  );
}
