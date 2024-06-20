import { Button, Col, Form, Input, Row, Space } from "antd";
import { useEffect } from "react";
import { LuClipboardCopy } from "react-icons/lu";

interface FormProps {
    drawerCloseState: boolean;
    setLoading: (value: React.SetStateAction<boolean>) => void
    onClosed: () => void
  }

export const DrawerDatabaseUpdateForm = ({
    drawerCloseState,
    setLoading,
    onClosed
  }: FormProps): JSX.Element => {

    const [form] = Form.useForm();

    useEffect(() => {
        form.resetFields();
    }, [drawerCloseState]);

    const onFinish = () => {
        // Make API call to save the database
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          onClosed();
        }, 500);
      };

    return (
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
    );
  };
