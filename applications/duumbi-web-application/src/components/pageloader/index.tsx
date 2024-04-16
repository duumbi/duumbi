import { Flex, Spin } from "antd";

export function PageLoader() {
  return (
    <Flex align="center" gap="middle">
      <Spin size="large" />
    </Flex>
  );
}