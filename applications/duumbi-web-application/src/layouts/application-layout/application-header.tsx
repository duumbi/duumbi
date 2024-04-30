import { Menu, MenuProps, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import { AvatarWithMenu } from "../../components/header";

import { styled } from "styled-components";
import { AppTheme } from "../../constants/theme";
import {
  ApplicationHeaderConst,
  MENUITEM_DATABASE,
} from "../../constants/header-menu";
import { useState } from "react";

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
interface ApplicationHeaderProps {
  updateDatabaseDrawer: () => void;
  updateCollectionDrawer: () => void;
  updateEnvironmentDrawer: () => void;
}

export default function ApplicationHeader({
  updateDatabaseDrawer,
  updateCollectionDrawer,
  updateEnvironmentDrawer,
}: ApplicationHeaderProps) {
  const [menuState, setMenuState] = useState("");

  const onClick: MenuProps["onClick"] = (e) => {
    setMenuState(e.key);

    if (e.key === MENUITEM_DATABASE) {
      updateDatabaseDrawer();
    } else if (e.key === "collection") {
      updateCollectionDrawer();
    } else if (e.key === "environment") {
      updateEnvironmentDrawer();
    }
  };

  return (
    <StyledHeader>
      <StyledLogo>
        <img src="/img/logo.png" alt="logo" />
      </StyledLogo>
      <StyledMenu>
        <Menu
          mode="horizontal"
          selectable={false}
          onClick={onClick}
          items={ApplicationHeaderConst.menuItems}
        />
      </StyledMenu>
      <StyledAvatar>
        <Space size={8}>
          <AvatarWithMenu />
        </Space>
      </StyledAvatar>
    </StyledHeader>
  );
}
