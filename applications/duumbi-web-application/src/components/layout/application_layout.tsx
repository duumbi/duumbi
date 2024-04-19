import React, { useState } from "react";

import "../../assets/css/styles.css";
import { Avatar, Breadcrumb, Button, Layout, Menu, Space, Tooltip } from "antd";
import { Content, Header } from "antd/es/layout/layout";

import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineHelpOutline } from "react-icons/md";
import { GoDatabase } from "react-icons/go";
import { BsCollection } from "react-icons/bs";
import { MdOutlineSchema } from "react-icons/md";
import { MdDataSaverOff } from "react-icons/md";
import { LiaUserEditSolid } from "react-icons/lia";
import { IoIosGitNetwork } from "react-icons/io";

export const ApplicationLayout = ({ children }: React.PropsWithChildren) => {
  const collectionItems = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          Other Item
        </a>
      ),
    },
  ];

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
              selectable={false}
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
          <Content>
            <div className="designer-workspace">
              <div className="designer-workspace-toolbar">
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
              <div className="designer-workspace-content">
                <div className="designer-workspace-breadcrumb">
                  <Breadcrumb
                    separator=">"
                    items={[
                      {
                        href: "",
                        title: (
                          <>
                            <GoDatabase />
                            <span> Database Name</span>
                          </>
                        ),
                      },
                      {
                        href: "",
                        title: (
                          <>
                            <BsCollection />
                            <span> Collection Name</span>
                          </>
                        ),
                        menu: { items: collectionItems },
                      },
                      {
                        href: "",
                        title: (
                          <>
                            <IoIosGitNetwork />
                            <span> Environment Name</span>
                          </>
                        ),
                      },
                    ]}
                  />
                  </div>
                {children}
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
