import { Button, Col, Drawer, Form, Input, Row, Space } from "antd";
import { AppTheme } from "../../constants/theme";
import { LuClipboardCopy } from "react-icons/lu";
import { ApplicationDrawerType } from "../../constants/enums";

interface DrawerProps {
  drawerState: ApplicationDrawerType;
  updateDrawer: (drawerType: ApplicationDrawerType) => void;
}

export default function ApplicationDrawerEnvironment({
  drawerState,
  updateDrawer,
}: DrawerProps): JSX.Element {
  return (
    <Drawer
      open={drawerState === ApplicationDrawerType.ENVIRONMENT}
      title="Environment"
      closable={true}
      maskClosable={true}
      width={720}
      onClose={() => updateDrawer(ApplicationDrawerType.NONE)}
      styles={{
        body: {
          paddingBottom: 80,
        },
        header: {
          backgroundColor: AppTheme.colors.drawerHeaderBackground,
          borderBottom: AppTheme.border.drawerHeaderBorder,
        },
      }}
      extra={
        <Space>
          <Button onClick={() => updateDrawer(ApplicationDrawerType.NONE)} type="primary">
            Create new environment
          </Button>
        </Space>
      }
    >
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please enter user name" }]}
            >
              <Space.Compact style={{ width: "100%" }}>
                <Input disabled placeholder="Borderless" />
                <Button icon={<LuClipboardCopy/>}>Submit</Button>
              </Space.Compact>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
}
