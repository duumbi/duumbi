import { Menu, MenuProps, Space, Segmented } from "antd";
import { Header } from "antd/es/layout/layout";
import { styled } from "styled-components";
import { ApplicationHeaderConst } from "../../constants/header-menu";
import { ApplicationDrawerType, ThemeType } from "../../constants/enums";
import AvatarWithMenu from "../../components/header/avatar-with-menu";
import { CiLight, CiDark } from "react-icons/ci";

const StyledHeader = styled(Header)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledSegmented = styled(Segmented)`
  margin: 0 38px 0 18px;
`;

const StyledLogo = styled.div`
  width: 240px;
  flex-grow: 1;
`;

const StyledMenu = styled.div`
  flex-grow: 1000;
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
  setTheme: (t: ThemeType) => void;
}

export default function ApplicationHeader({
  updateDrawerState, setTheme
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
        <StyledSegmented
          options={[
            { value: ThemeType.light, icon: <CiLight /> },
            { value: ThemeType.dark, icon: <CiDark /> },
          ]}
          defaultValue={localStorage.getItem("theme") === ThemeType.light.toString() ? ThemeType.light : ThemeType.dark}
          onChange={(value) => {
            setTheme(value === ThemeType.light ? ThemeType.light : ThemeType.dark);
          }}
        />
        <Space size={8}>
          <AvatarWithMenu updateDrawerState={updateDrawerState}/>
        </Space>
      </StyledAvatar>
    </StyledHeader>
  );
}
