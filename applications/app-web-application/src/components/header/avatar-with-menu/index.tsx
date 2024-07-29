import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Flex, Menu, Popover } from "antd";
import { CiUser } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { Text, UserAvatar } from "../../base";
import { styled } from "styled-components";
import { UserOutlined } from "@ant-design/icons";
import { ApplicationDrawerType } from "../../../constants/enums";

const StyledUserData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

const StyledAvatarUserData = styled.div`
  padding-left: 10px;
`;

const StyledDescriptionUserData = styled.div`
  padding-top: 4px;
  padding-right: 10px;
  padding-left: 10px;
  align-items: strecth;
  justify-content: flex-start;
`;
interface AvatarWithMenuProps {
  updateDrawerState: (drawerType: ApplicationDrawerType) => void;
}

export default function AvatarWithMenu({
  updateDrawerState,
}: AvatarWithMenuProps) {
  const { user, logout } = useAuth0();

  const userPicture = user
    ? user.picture
    : "https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png";

  const content = (
    <div>
      <StyledUserData>
        <StyledAvatarUserData>
          <Avatar src={userPicture} icon={<UserOutlined />} />
        </StyledAvatarUserData>
        <StyledDescriptionUserData>
          <Flex gap="smal" vertical>
            <Text strong style={{ justifyContent: "flex-start" }}>
              {user?.name}
            </Text>
            <Text disabled style={{ justifyContent: "flex-start" }}>
              {user?.email ? user?.email : user?.nickname}
            </Text>
          </Flex>
        </StyledDescriptionUserData>
      </StyledUserData>
      <Menu
        items={[
          {
            type: "divider",
          },
          {
            key: "profile",
            label: "Your profile",
            icon: <CiUser />,
            onClick: () => {
              updateDrawerState(ApplicationDrawerType.PROFILE);
            },
          },
          {
            key: "signout",
            label: "Sign out",
            icon: <IoIosLogOut />,
            onClick: () => {
              logout({ logoutParams: { returnTo: window.location.origin } });
            },
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
          src={userPicture}
          icon={<UserOutlined />}
          size="default"
          style={{ cursor: "pointer" }}
        />
      </Popover>
    </>
  );
}
