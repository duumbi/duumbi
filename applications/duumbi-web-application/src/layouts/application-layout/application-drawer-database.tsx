import { Button, Col, Drawer, Form, Input, Row, Space, Spin } from "antd";
import { AppTheme } from "../../constants/theme";
import { LuClipboardCopy } from "react-icons/lu";
import React from "react";

interface DrawerProps {
  drawerState: boolean;
  updateDrawer: () => void;
}

export default function ApplicationDrawerDatabase({
  drawerState,
  updateDrawer,
}: DrawerProps): JSX.Element {

  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState<boolean>(false);

  const onFinish = (values: any) => {
    // Make API call to save the database
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClosed();
    }, 500);
  };

  const onClosed = () => {
    form.resetFields();
    updateDrawer();
  };

  return (
    <Drawer
      open={drawerState}
      title="Database"
      closable={true}
      maskClosable={true}
      width={720}
      onClose={() => onClosed()}
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
          <Button onClick={() => updateDrawer()} type="primary">
            Create new database
          </Button>
        </Space>
      }
    >
      <Spin spinning={loading}>

        <Form
          form={form}
          autoComplete="off"
          onFinish={onFinish}
          layout="vertical"
          initialValues={{
            ["name"]: "Hello, antdee!",
          }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name={"id"} label="Database ID">
                <Space.Compact style={{ width: "100%" }}>
                  <Input disabled value="435MND-363" />
                  <Button icon={<LuClipboardCopy />} />
                </Space.Compact>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item name={"region"} label="Database region">
                <Space.Compact style={{ width: "100%" }}>
                  <Input disabled value="435MND-363" />
                </Space.Compact>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name={"name"}
                label="Name"
                validateFirst={true}
                tooltip="Name should be between 3 and 30 characters"
                rules={[
                  { required: true, message: "Please enter database name" },
                  { min: 3, message: "Name should be at least 3 characters" },
                  { max: 30, message: "Name should be at most 30 characters" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={12}></Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: false,
                    message: "please enter url description",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please enter url description"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Button htmlType="submit" type="primary">
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </Spin>
    </Drawer>
  );
}
