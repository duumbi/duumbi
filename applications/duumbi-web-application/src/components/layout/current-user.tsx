import { Popover } from "antd";
import { CustomAvatar } from "../custom-avatar";
import { useGetIdentity } from "@refinedev/core";
import { User } from '@auth0/auth0-spa-js';

export const CurrentUser = () => {
  const { data: user } = useGetIdentity<User>();


  return (
    <>
      <Popover
        placement="bottomRight"
        trigger="click"
        overlayInnerStyle={{ padding: 0 }}
        overlayStyle={{ zIndex: 999 }}
      >
        <CustomAvatar
            name={user?.name}
            src={user?.picture}
            size="default"
            style={{ cursor: "pointer" }}
        />
      </Popover>
    </>
  );
};
