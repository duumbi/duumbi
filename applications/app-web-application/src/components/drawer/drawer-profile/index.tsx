import { useAuth0 } from "@auth0/auth0-react";
import { styled } from "styled-components";
import { Alert, Button, Col, Form, Input, Row, Card, Avatar } from "antd";
import { useEffect, useState } from "react";
import { Profile } from "../../../generated-sources/openapi";
import { getAppServiceAudience, getUserInfo, updateUserProfile } from "../../../middleware/http";
import { UserOutlined } from "@ant-design/icons";

const StyledCard = styled(Card)`
  padding-top: 22px;
  border: 0;
`;

interface DrawerProfileProps {
  setIsLoading: (value: React.SetStateAction<boolean>) => void;
  onClosed: () => void;
  isClosed: boolean;
}

interface FormValues {
  name: string;
}

export const DrawerProfile = ({
  setIsLoading,
  onClosed,
  isClosed,
}: DrawerProfileProps): JSX.Element => {
  const {user, getAccessTokenSilently } = useAuth0();
  const [profile, setProfile] = useState<Profile>();
  const [error, setError] = useState<string>();
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [isClosed]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      const token = await getAccessTokenSilently({
        authorizationParams: {
          scope: "openid profile email",
        },
      });

      try {
        const userInfo = await getUserInfo(token);
        setProfile(userInfo);
        setIsLoading(false);
      } catch (e) {
        if (e instanceof Error) {
          console.log(e);
          setError("Could not fetch data, please try again later.");
        } else {
          const message =
            "An unexpected error occurred. Please try again later.";
          setError(message);
        }
        setIsLoading(false);
      }
    }
    fetchData();
    // form.resetFields();
  }, [getAccessTokenSilently]);

  useEffect(() => {
    form.resetFields();
  }, [profile]);

  if (error) {
    return <Alert message="Error" description={error} type="error" showIcon />;
  }

  async function onFinish(values: FormValues): Promise<void> {
    setIsLoading(true);
    const token = await getAccessTokenSilently({
      authorizationParams: {
        scope: "openid profile email",
        audience: getAppServiceAudience(),
      },
    });

    if (user?.sub !== undefined && user.name !== values.name) {
      await updateUserProfile(user?.sub, values, token);
      user.name = values.name;
    }

    setTimeout(() => {
      setIsLoading(false);
      onClosed();
    }, 100);
  }

  const profilePicture = profile
    ? profile.picture
    : "https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png";

  return (
    <Form
      form={form}
      id="drawer-profile-form"
      autoComplete="off"
      onFinish={onFinish}
      layout="vertical"
      initialValues={{
        ["name"]: profile?.name,
        ["email"]: profile?.email,
      }}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name={"name"}
            label="Name"
            extra="Your name will be displayed to other users"
            validateFirst={true}
            tooltip="Name should be between 3 and 50 characters"
            rules={[
              { required: true, message: "Please enter your name" },
              { min: 3, message: "Name should be at least 3 characters" },
              { max: 50, message: "Name should be at most 50 characters" },
            ]}
          >
            <Input placeholder="Your name" />
          </Form.Item>
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar src={profilePicture} size={120} icon={<UserOutlined />} />
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name={"email"}
            label="E-mail"
            validateFirst={true}
            tooltip="Email address cannot be changed"
            extra="Your email address cannot be changed"
            rules={[
              { required: true, message: "Please enter your E-mail" },
              { type: "email", message: "Please enter a valid E-mail" },
            ]}
          >
            <Input placeholder="Your name" disabled />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={24}>
          <Button htmlType="submit" type="primary">
            Update profile
          </Button>
        </Col>
      </Row>

      <StyledCard
        title="Danger zone"
        styles={{
          body: {
            borderBottom: "1px solid red",
            borderLeft: "1px solid red",
            borderRight: "1px solid red",
          },
          title: { color: "red" },
          header: {
            borderTop: "1px solid red",
            borderLeft: "1px solid red",
            borderRight: "1px solid red",
          },
        }}
      >
        Deletes the profile permanently. This cannot be undone.
        <p>
          <Button type="primary" danger disabled={true}>Delete profile</Button>
        </p>
      </StyledCard>
    </Form>
  );
};
