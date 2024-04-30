import { GoDatabase } from "react-icons/go";
import { BsCollection } from "react-icons/bs";
import { MdOutlineHelpOutline } from "react-icons/md";
import { MenuProps } from "antd";
import { IoIosGitNetwork } from "react-icons/io";

type MenuItem = Required<MenuProps>["items"][number];

export const MENUITEM_DATABASE = "database";

const HeaderMenuItems: MenuItem[] = [
  {
    key: MENUITEM_DATABASE,
    label: "Database",
    icon: <GoDatabase />,
  },
  {
    key: "collection",
    label: "Collection",
    icon: <BsCollection />,
  },
  {
    key: "environment",
    label: "Environment",
    icon: <IoIosGitNetwork />,
  },
  {
    key: "help",
    label: "Help",
    icon: <MdOutlineHelpOutline />,
  },
];

export const ApplicationHeaderConst = {
  menuItems: HeaderMenuItems,
};
