import {
  IconCrileInfo,
  IconDashboard,
  IconSetting,
  IconUser,
  IconFriends,
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
    href: "/profile",
  },
  {
    name: "Setting Profile",
    icon: IconSetting,
    href: "/edit-profile",
  },
  {
    name: "Help Center",
    icon: IconCrileInfo,
    href: "/",
  },
];

export const FAKEDATA_SKELETON = [0, 1, 2, 3, 4];
