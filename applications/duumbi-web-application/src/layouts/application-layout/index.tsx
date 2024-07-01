import { Layout } from "antd";
import { ApplicationDesigner } from "./application-designer";
import { styled } from "styled-components";
import { useState } from "react";
import ApplicationHeader from "./application-header";
import ApplicationDrawerDatabase from "./application-drawer-database";
import ApplicationDrawerCollection from "./application-drawer-collection";
import ApplicationDrawerEnvironment from "./application-drawer-environment";
import { ApplicationDrawerType } from "../../constants/enums";
import ApplicationDrawerProfile from "./application-drawer-profile";

const StyledLayout = styled(Layout)`
  height: 100vh;
  width: 100vw;
`;

export const ApplicationLayout = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const [drawerState, setDrawerState] = useState<ApplicationDrawerType>(ApplicationDrawerType.NONE);

  function updateDrawerState(drawerType: ApplicationDrawerType) {
    setDrawerState(drawerType);
  }

  return (
    <>
      <StyledLayout>
        <ApplicationHeader
          updateDrawerState={updateDrawerState}
        />
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

    </>
  );
};
