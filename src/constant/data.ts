import {
  IconCrileInfo,
  IconDashboard,
  IconSetting,
  IconUser,
  IconUserList,
} from "@/assets/icons";

// import UserListIcon from "@/assets/icons/UserListIcon";
interface PopupItem {
  name: string;
  icon: React.ElementType;
  href: string;
}

export const LIST_POPUPITEM: PopupItem[] = [
  {
    name: "Profile",
    icon: IconUser,
    href: "/",
  },
  {
    name: "Setting Profile",
    icon: IconSetting,
    href: "/",
  },
  {
    name: "Holder Benefits",
    icon: IconDashboard,
    href: "/",
  },
  {
    name: " Invite Friends",
    icon: IconUserList,
    href: "/",
  },
  {
    name: "Help Center",
    icon: IconCrileInfo,
    href: "/",
  },
];
