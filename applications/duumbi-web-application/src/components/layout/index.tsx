import React from "react";
import { Layout as PageLayout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import "../../assets/css/styles.css";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <PageLayout className="container">
        <Header
          color="white"
          style ={{
            backgroundColor: "white",
          }}
        >Test</Header>
        <PageLayout>
          <Sider>Test</Sider>
          <Content>
            {children}
          </Content>
        </PageLayout>
    </PageLayout>
    </>
  );
};
