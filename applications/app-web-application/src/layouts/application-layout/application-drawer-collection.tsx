import { Button, Col, Drawer, Form, Input, Row, Space } from "antd";
import { ApplicationDrawerType } from "../../constants/enums";

interface DrawerProps {
  drawerState: ApplicationDrawerType;
  updateDrawer: (drawerType: ApplicationDrawerType) => void;
}

export default function ApplicationDrawerCollection({
  drawerState,
  updateDrawer,
}: DrawerProps): JSX.Element {
  return (
    <Drawer
      open={drawerState === ApplicationDrawerType.COLLECTION}
      title="Collection"
      closable={true}
      maskClosable={true}
      width={720}
      onClose={() => updateDrawer(ApplicationDrawerType.NONE)}
      styles={{
        body: {
          paddingBottom: 80,
        },
      }}
      extra={
        <Space>
          <Button onClick={() => updateDrawer(ApplicationDrawerType.NONE)} type="primary">
            Create new collection
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
                <Button>Submit</Button>
              </Space.Compact>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
}
