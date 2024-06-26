import { GoDatabase } from "react-icons/go";
import { BsCollection } from "react-icons/bs";
import { MdOutlineHelpOutline } from "react-icons/md";
import { MenuProps } from "antd";
import { IoIosGitNetwork } from "react-icons/io";
import { ApplicationDrawerType } from "./enums";

type MenuItem = Required<MenuProps>["items"][number];

const HeaderMenuItems: MenuItem[] = [
  {
    key: ApplicationDrawerType.DATABASE,
    label: "Database",
    icon: <GoDatabase />,
  },
  {
    key: ApplicationDrawerType.COLLECTION,
    label: "Collection",
    icon: <BsCollection />,
  },
  {
    key: ApplicationDrawerType.ENVIRONMENT,
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
