
import { Avatar as AntdAvatar } from "antd";
import type { AvatarProps } from "antd";
import { getNameInitials } from "../utilities/get-name-initials";

type Props = AvatarProps & {
    name?: string;
  };

export const CustomAvatar = ({ name = "", style, ...rest }: Props) => {
    return (
        <AntdAvatar
            alt={name}
            size="small"
            style={{
                backgroundColor: "#f56a00",
                display: "flex",
                alignItems: "center",
                border: "none",
                ...style
            }}
            {...rest}
        >
            {getNameInitials(name)}
        </AntdAvatar>

    );
  }