import { ConfigProvider, Layout, theme } from "antd";
import { ApplicationDesigner } from "./application-designer";
import { ThemeProvider, styled } from "styled-components";
import { useEffect, useState } from "react";
import ApplicationHeader from "./application-header";
import ApplicationDrawerDatabase from "./application-drawer-database";
import ApplicationDrawerCollection from "./application-drawer-collection";
import ApplicationDrawerEnvironment from "./application-drawer-environment";
import { ApplicationDrawerType, ThemeType } from "../../constants/enums";
import ApplicationDrawerProfile from "./application-drawer-profile";
import { AppTheme } from "../../constants/theme";

const StyledLayout = styled(Layout)`
  height: 100vh;
  width: 100vw;
`;

export const ApplicationLayout = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [drawerState, setDrawerState] = useState<ApplicationDrawerType>(
    ApplicationDrawerType.NONE
  );
  const [themeType, setThemeType] = useState<ThemeType>(ThemeType.light);

  const systemTheme = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const getTheme = () =>
    ((localStorage.getItem("theme")) || systemTheme()) === ThemeType.light.toString() ? ThemeType.light : ThemeType.dark;

  const setTheme = (t: ThemeType) => {
    localStorage.setItem("theme", t.toString())
    setThemeType(t);
  }

  function updateDrawerState(drawerType: ApplicationDrawerType) {
    setDrawerState(drawerType);
  }

  useEffect(() => setTheme(getTheme()), [])

  const styledTheme = {
    toolbarBg: themeType === ThemeType.light ?  AppTheme.light.colors.toolbarBg : AppTheme.dark.colors.toolbarBg
  };


  return (
    <ConfigProvider
      theme={{
        algorithm: themeType === ThemeType.light ? defaultAlgorithm: darkAlgorithm,
        token: {
          colorPrimary: themeType === ThemeType.light ? AppTheme.light.colors.primary : AppTheme.dark.colors.primary,
        },
        components: {
          Layout: {
            bodyBg: themeType === ThemeType.light ? AppTheme.light.layout.bodyBg : AppTheme.dark.layout.bodyBg,
            headerBg: themeType === ThemeType.light ? AppTheme.light.layout.headerBg : AppTheme.dark.layout.headerBg,
          },
          Menu: {
            itemBg: themeType === ThemeType.light ? AppTheme.light.menu.itemBg : AppTheme.dark.menu.itemBg,
            activeBarBorderWidth: 0,
          },
          Button: {
            // primaryColor: AppTheme.colors.primary,
          },
        },
      }}
    >
      <ThemeProvider theme={styledTheme}>
        <StyledLayout>
          <ApplicationHeader updateDrawerState={updateDrawerState} setTheme={setTheme}/>
          <ApplicationDesigner>{children}</ApplicationDesigner>
        </StyledLayout>

        <ApplicationDrawerDatabase
          drawerState={drawerState}
          updateDrawer={updateDrawerState}
        />
        <ApplicationDrawerCollection
          drawerState={drawerState}
          updateDrawer={updateDrawerState}
        />
        <ApplicationDrawerEnvironment
          drawerState={drawerState}
          updateDrawer={updateDrawerState}
        />

        <ApplicationDrawerProfile
          drawerState={drawerState}
          updateDrawer={updateDrawerState}
        />
      </ThemeProvider>
    </ConfigProvider>
  );
};
