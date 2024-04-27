import { Flex, Spin } from "antd";

export function PageLoader() {
  return (
    <Flex align="center" gap="middle" justify="center" style={{ height: '100vh' }}>
      <Spin size="large" />
    </Flex>
  );
}