import React, { useState } from "react";

import "../../assets/css/styles.css";
import { Avatar, Button, Layout, Menu, Space, Flex, Tooltip, Card } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

import { GrHomeRounded } from "react-icons/gr";

import { IoIosSettings } from "react-icons/io";
import { MdOutlineHelpOutline } from "react-icons/md";
import { GoDatabase } from "react-icons/go";
import { BsCollection } from "react-icons/bs";
import { MdOutlineSchema } from "react-icons/md";
import { MdDataSaverOff } from "react-icons/md";
import { LiaUserEditSolid } from "react-icons/lia";

export const ApplicationLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Layout className="container">
        <Header className="header">
          <div className="header-logo">
            <img src="/img/logo.png" alt="logo" />
          </div>
          <div className="header-menu">
            <Menu
              mode="horizontal"
              items={[
                {
                  key: "database",
                  label: "Database",
                  icon: <GoDatabase />,
                },
                {
                  key: "collection",
                  label: "Collection",
                  icon: <BsCollection />,
                },
                {
                  key: "help",
                  label: "Help",
                  icon: <MdOutlineHelpOutline />,
                },
              ]}
            />
          </div>
          <div className="header-avatar">
            <Space size={8}>
              <Avatar icon={<GrHomeRounded />} />
            </Space>
          </div>
        </Header>
        <Layout className="designer">
          <Header className="designer-toolbar">
            <div className="floating-toolbar">
              <Tooltip title="Schema">
                <Button
                  shape="default"
                  size="large"
                  type="dashed"
                  icon={<MdOutlineSchema />}
                />
              </Tooltip>
              <Tooltip title="Ingest">
                <Button
                  shape="default"
                  size="large"
                  type="dashed"
                  icon={<MdDataSaverOff />}
                />
              </Tooltip>
              <Tooltip title="Content editor">
                <Button
                  shape="default"
                  size="large"
                  type="dashed"
                  icon={<LiaUserEditSolid />}
                />
              </Tooltip>
            </div>
          </Header>

          <Content className="content">{children}</Content>
        </Layout>
      </Layout>
    </>
  );
};
