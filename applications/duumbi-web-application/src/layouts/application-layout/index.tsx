import { Layout } from "antd";
import { ApplicationDesigner } from "./application-designer";
import { styled } from "styled-components";
import { useState } from "react";
import ApplicationHeader from "./application-header";
import ApplicationDrawerDatabase from "./application-drawer-database";
import ApplicationDrawerCollection from "./application-drawer-collection";
import ApplicationDrawerEnvironment from "./application-drawer-environment";

const StyledLayout = styled(Layout)`
  height: 100vh;
  width: 100vw;
`;

export const ApplicationLayout = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const [databaseState, setDatabaseState] = useState(false);
  const [collectionState, setCollectionState] = useState(false);
  const [environmentState, setEnvironmentState] = useState(false);

  function updateDatabaseDrawer() {
    setDatabaseState(!databaseState);
  }

  function updateCollectionDrawer() {
    setCollectionState(!collectionState);
  }

  function updateEnvironmentDrawer() {
    setEnvironmentState(!environmentState);
  }

  return (
    <>
      <StyledLayout>
        <ApplicationHeader
          updateDatabaseDrawer={updateDatabaseDrawer}
          updateCollectionDrawer={updateCollectionDrawer}
          updateEnvironmentDrawer={updateEnvironmentDrawer}
        />
        <ApplicationDesigner>{children}</ApplicationDesigner>
      </StyledLayout>

      <ApplicationDrawerDatabase drawerState={databaseState} updateDrawer={updateDatabaseDrawer} />
      <ApplicationDrawerCollection drawerState={collectionState} updateDrawer={updateCollectionDrawer} />
      <ApplicationDrawerEnvironment drawerState={environmentState} updateDrawer={updateEnvironmentDrawer} />
    </>
  );
};
