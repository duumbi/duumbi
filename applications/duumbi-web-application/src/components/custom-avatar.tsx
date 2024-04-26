import { Avatar } from "antd";
import type { AvatarProps } from "antd";

interface CustomAvatarProps extends AvatarProps {
  name?: string;
}

export const CustomAvatar = ({ name = "", style, ...rest }: CustomAvatarProps) => {
  return (
    <Avatar
      alt={name}
      style={{
        border: "none",
        ...style,
      }}
      {...rest}
    >
      {name}
    </Avatar>
  );
};
