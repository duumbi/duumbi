import { Menu, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import { AvatarWithMenu } from "../../components/header";

import { styled } from "styled-components";
import { AppTheme } from "../../constants/theme";
import { ApplicationHeaderConst } from "../../constants/header-menu";

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
          items={ ApplicationHeaderConst.menuItems }
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
