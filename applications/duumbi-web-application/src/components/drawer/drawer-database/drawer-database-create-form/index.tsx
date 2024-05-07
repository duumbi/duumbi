import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  SelectProps,
  Space,
} from "antd";
import React from "react";
import { useEffect } from "react";
import { ApplicationContext } from "../../../../context/application-context";
import { ApplicationContextType } from "../../../../types";

const options: SelectProps["options"] = [
  {
    label: "China",
    value: "CH",
    emoji: "🇨🇳",
  },
  {
    label: "European Union",
    value: "EU",
    emoji: "🇪🇺",
  },
  {
    label: "United States",
    value: "US",
    emoji: "🇺🇸",
  },
];

interface FormProps {
  drawerCloseState: boolean;
  setLoading: (value: React.SetStateAction<boolean>) => void;
  onClosed: () => void;
}

export const DrawerDatabaseCreateForm = ({
  drawerCloseState,
  setLoading,
  onClosed,
}: FormProps): JSX.Element => {
  const [form] = Form.useForm();
  const {application, setDatabase} = React.useContext(ApplicationContext) as ApplicationContextType;

  useEffect(() => {
    form.resetFields();
  }, [drawerCloseState]);

  const onFinish = (values: any) => {
    // Make API call to save the database
    setDatabase({key: "bab", name: values.name});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClosed();
    }, 500);
  };

  return (
    <Form
      form={form}
      id="drawer-database-create-form"
      autoComplete="off"
      onFinish={onFinish}
      layout="vertical"
      initialValues={{
        ["name"]: "",
      }}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="name"
            label="Name"
            validateFirst={true}
            tooltip="Name should be between 3 and 30 characters"
            rules={[
              { required: true, message: "Please enter database name" },
              { min: 3, message: "Name should be at least 3 characters" },
              { max: 30, message: "Name should be at most 30 characters" },
            ]}
          >
            <Input placeholder="database name" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            name="region"
            label="Region"
            rules={[{ required: true, message: "Please select a region" }]}
          >
            <Select
              placeholder="Please select an region"
              options={options}
              optionRender={(option) => (
                <Space>
                  <span role="img" aria-label={option.data.label}>
                    {option.data.emoji}
                  </span>
                  {option.data.label}
                </Space>
              )}
            ></Select>
          </Form.Item>
        </Col>
      </Row>


      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: false,
                message: "please enter description",
              },
            ]}
          >
            <Input.TextArea
              rows={4}
              maxLength={100}
              showCount
              placeholder="please enter description"
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
