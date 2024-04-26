import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Flex, Menu, Popover } from "antd";
import { CustomAvatar } from "../custom-avatar";
import { Text } from "../text";
import { CiUser } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";

export const CurrentUser = () => {
  const { user } = useAuth0();


  const userPicture = user
    ? user.picture
    : "https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png";

  const content = (
    <div>
      <div className="currentuser_userdata">
        <div className="currentuser_userdata-avatar">
          <Avatar src={userPicture} />
        </div>
        <div className="currentuser_userdata-title">
          <Flex gap="smal" vertical>
            <Text strong style={{ justifyContent: "flex-start" }}>
              {user?.name}
            </Text>
            <Text disabled style={{ justifyContent: "flex-start" }}>
              {user?.sub}
            </Text>
          </Flex>
        </div>
      </div>
      <Menu
        items={[
          {
            type: "divider",
          },
          {
            key: "profile",
            label: "Your profile",
            icon: <CiUser />,
          },
          {
            key: "signout",
            label: "Sign out",
            icon: <IoIosLogOut />,
          },
        ]}
      />
    </div>
  );

  return (
    <>
      <Popover
        placement="bottomRight"
        trigger="click"
        overlayInnerStyle={{ padding: 0 }}
        overlayStyle={{ zIndex: 999 }}
        content={content}
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
