import { Drawer, Spin } from "antd";
import { ApplicationDrawerType } from "../../constants/enums";
import React from "react";
import { DrawerProfile } from "../../components/drawer/drawer-profile";

interface DrawerProps {
  drawerState: ApplicationDrawerType;
  updateDrawer: (drawerType: ApplicationDrawerType) => void;
}

export default function ApplicationDrawerProfile({
  drawerState,
  updateDrawer,
}: DrawerProps): JSX.Element {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onClosed = () => {
    updateDrawer(ApplicationDrawerType.NONE);
  };

  return (
    <Drawer
      open={drawerState === ApplicationDrawerType.PROFILE}
      title="Your Profile"
      closable={true}
      maskClosable={true}
      width={720}
      onClose={() => onClosed()}
      styles={{
        body: {
          paddingBottom: 80,
        },
      }}
    >
      <Spin spinning={isLoading}>
        <DrawerProfile setIsLoading={setIsLoading} />
      </Spin>
    </Drawer>
  );
}
