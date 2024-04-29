import { GoDatabase } from "react-icons/go";
import { BsCollection } from "react-icons/bs";
import { MdOutlineHelpOutline } from "react-icons/md";
import { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const HeaderMenuItems: MenuItem[] = [
  {
    key: "database",
    label: "Database",
    icon: <GoDatabase />,
  },
  {
    key: "collection",
    label: "Collection",
    icon: <BsCollection />,
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
