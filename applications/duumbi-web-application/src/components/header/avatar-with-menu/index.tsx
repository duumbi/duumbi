import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Flex, Menu, Popover } from "antd";
import { CiUser } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { Text, UserAvatar } from "../../base";
import { styled } from "styled-components";

const UserData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

const AvatarUserData = styled.div`
    padding-left: 10px;
`;

const DescriptionUserData = styled.div`
    padding-top: 4px;
    padding-right: 10px;
    padding-left: 10px;
    align-items: strecth;
    justify-content: flex-start;
    `;

export const AvatarWithMenu = () => {
  const { user } = useAuth0();

  const userPicture = user
    ? user.picture
    : "https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png";

  const content = (
    <div>
      <UserData>
        <AvatarUserData>
          <Avatar src={userPicture} />
        </AvatarUserData>
        <DescriptionUserData>
          <Flex gap="smal" vertical>
            <Text strong style={{ justifyContent: "flex-start" }}>
              {user?.name}
            </Text>
            <Text disabled style={{ justifyContent: "flex-start" }}>
              {user?.sub}
            </Text>
          </Flex>
        </DescriptionUserData>
      </UserData>
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
        <UserAvatar
          name={user?.name}
          src={user?.picture}
          size="default"
          style={{ cursor: "pointer" }}
        />
      </Popover>
    </>
  );
};
