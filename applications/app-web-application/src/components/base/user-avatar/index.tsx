import { Avatar } from "antd";
import type { AvatarProps } from "antd";

interface UserAvatarProps extends AvatarProps {
  name?: string;
}

export const UserAvatar = ({ name = "", style, ...rest }: UserAvatarProps) => {
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
