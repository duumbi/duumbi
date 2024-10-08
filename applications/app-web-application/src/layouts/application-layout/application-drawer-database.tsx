import { Button, Drawer, Empty, Space, Spin } from "antd";
import React from "react";
import { DrawerDatabaseUpdateForm, DrawerDatabaseCreateForm } from "../../components/drawer/drawer-database";
import { ApplicationContext } from "../../context/application-context";
import { ApplicationContextType } from "../../types";
import { ApplicationDrawerType } from "../../constants/enums";

interface DrawerProps {
  drawerState: ApplicationDrawerType;
  updateDrawer: (drawerType: ApplicationDrawerType) => void;
}

type FormType = "create" | "update";

type FormDataType = {
  title: string;
  button: string;
  formType: FormType;
};

export default function ApplicationDrawerDatabase({
  drawerState,
  updateDrawer,
}: DrawerProps): JSX.Element {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [closeState, setCloseState] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState<FormDataType>({title: "Database", button: "Create new database", formType: "update"});
  const {application} = React.useContext(ApplicationContext) as ApplicationContextType;

  const onClosed = () => {
    setCloseState(!closeState);
    setFormData({title: "Database", button: "Create new database", formType: "update"});
    updateDrawer(ApplicationDrawerType.NONE);
  };

  const handleFormData = (formType: FormType) => {
    if (formType === "create") {
      setFormData({title: "Database", button: "Create new database", formType: "update"});
    } else {
      setFormData({title: "New database", button: "Back", formType: "create"});
    }
  }

  let drawerContent = <Empty />;

  if (formData.formType === "create") {
    drawerContent = ( <DrawerDatabaseCreateForm drawerCloseState={closeState} setLoading={setLoading} onClosed={onClosed} />);
  } else if (application.database) {
    drawerContent = (
      <DrawerDatabaseUpdateForm
        drawerCloseState={closeState}
        setLoading={setLoading}
        onClosed={onClosed}
      />
    );
  }

  return (
    <Drawer
      open={drawerState === ApplicationDrawerType.DATABASE}
      title={formData.title}
      closable={true}
      maskClosable={true}
      width={720}
      onClose={() => onClosed()}
      styles={{
        body: {
          paddingBottom: 80,
        },
      }}
      extra={
        <Space>
          <Button onClick={() => handleFormData(formData.formType)} type={formData.formType === "update" ? "primary": "default"}>
            {formData.button}
          </Button>
        </Space>
      }
    >
      <Spin spinning={loading}>{drawerContent}</Spin>
    </Drawer>
  );
}
