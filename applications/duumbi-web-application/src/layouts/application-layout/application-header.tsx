import { Menu, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import { GoDatabase } from "react-icons/go";
import { BsCollection } from "react-icons/bs";
import { MdOutlineHelpOutline } from "react-icons/md";
import { AvatarWithMenu } from "../../components/header";

import { styled } from "styled-components";
import { AppTheme } from "../../constants/theme";

const StyledHeader = styled(Header)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid ${AppTheme.colors.headerBorder};
`;

const StyledLogo = styled.div`
  width: 240px;
  flex-grow: 1;
`;

const StyledMenu = styled.div`
  flex-grow: 1;
  margin-left: auto;
  margin-right: 0;
  align-items: right;
  justify-content: flex-end;

  > ul {
    justify-content: flex-end;
  }
`;

const StyledAvatar = styled.div`
  margin-left: auto;
  margin-right: 0;
`;

export const ApplicationHeader = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <img src="/img/logo.png" alt="logo" />
      </StyledLogo>
      <StyledMenu>
        <Menu
          mode="horizontal"
          selectable={false}
          items={[
            {
              key: "database",
              label: "Databased",
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
          ]}
        />
      </StyledMenu>
      <StyledAvatar>
        <Space size={8}>
          <AvatarWithMenu />
        </Space>
      </StyledAvatar>
    </StyledHeader>
  );
};
