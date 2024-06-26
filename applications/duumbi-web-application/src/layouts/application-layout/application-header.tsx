import { Menu, MenuProps, Space } from "antd";
import { Header } from "antd/es/layout/layout";


import { styled } from "styled-components";
import { AppTheme } from "../../constants/theme";
import { ApplicationHeaderConst } from "../../constants/header-menu";
import { ApplicationDrawerType } from "../../constants/enums";
import AvatarWithMenu from "../../components/header/avatar-with-menu";

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
  updateDrawerState: (drawerType: ApplicationDrawerType) => void;
}

export default function ApplicationHeader({
  updateDrawerState,
}: ApplicationHeaderProps) {

  const onClick: MenuProps["onClick"] = (e) => {
    if (e.key === ApplicationDrawerType.DATABASE) {
      updateDrawerState(ApplicationDrawerType.DATABASE);
    } else if (e.key === ApplicationDrawerType.COLLECTION) {
      updateDrawerState(ApplicationDrawerType.COLLECTION);
    } else if (e.key === ApplicationDrawerType.ENVIRONMENT) {
      updateDrawerState(ApplicationDrawerType.ENVIRONMENT);
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
          <AvatarWithMenu updateDrawerState={updateDrawerState}/>
        </Space>
      </StyledAvatar>
    </StyledHeader>
  );
}
