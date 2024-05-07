import { Breadcrumb, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { styled } from "styled-components";
import { GoDatabase } from "react-icons/go";
import { ToolbarButton } from "../../components/designer/toolbar";
import { ApplicationDesignerConst } from "../../constants/designer-toolbar";
import { AppTheme } from "../../constants/theme";
import { useContext, useState } from "react";
import {
  Database,
  Collection,
  Environment,
  CurrentState,
  CoreProperties,
  ApplicationContextType,
  ApplicationInterface,
} from "../../types";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { BsCollection } from "react-icons/bs";
import { IoIosGitNetwork } from "react-icons/io";
import { ApplicationContext } from "../../context/application-context";

const StyledDesigner = styled(Layout)`
  background-color: ${AppTheme.colors.designerBackground};
`;

const StyledWorkspace = styled.div`
  background-color: ${AppTheme.colors.designerBackground};
  display: flex;
  padding-top: 17px;
  padding-left: 17px;
`;

const StyledToolbar = styled.div`
  top: 80px;
  left: 20px;
  width: 60px;
  background-color: ${AppTheme.colors.designerToolbarBackground};
  border-radius: 27px 27px 27px 27px;
  padding-top: 17px;
  padding-bottom: 17px;

  > button {
    margin: 10px;
    text-align: center;
  }
`;

const StyledContent = styled.div`
  flex-grow: 1;
  margin-left: 17px;
  margin-right: 17px;
`;

const StyledContentBreadcrumb = styled.div`
  padding-bottom: 12px;
`;

function createBreadcrumbItem(
  itemState: CoreProperties,
  icon: React.ReactNode
): ItemType {
  return {
    key: itemState?.key,
    title: (
      <>
        {icon}
        <span> {itemState?.name}</span>
      </>
    ),
  };
}

function createBreadcrumb(application : ApplicationInterface
): ItemType[] {
  return [
    application?.database
      ? createBreadcrumbItem(application.database, <GoDatabase />)
      : {},
      application?.database && application?.collection
      ? createBreadcrumbItem(application.collection, <BsCollection />)
      : {},
      application?.database && application?.collection && application?.environment
      ? createBreadcrumbItem(application.environment, <IoIosGitNetwork />)
      : {},
  ];
}

export const ApplicationDesigner = ({
  children,
}: React.PropsWithChildren): JSX.Element => {

  const { application } = useContext(
    ApplicationContext
  ) as ApplicationContextType;

  return (
    <StyledDesigner>
      <Content>
        <StyledWorkspace>
          <StyledToolbar>
            {ApplicationDesignerConst.toolbarItems.map((item) => (
              <ToolbarButton {...item} />
            ))}
          </StyledToolbar>
          <StyledContent>
            <StyledContentBreadcrumb>
              <Breadcrumb
                separator=">"
                items={createBreadcrumb(
                  application
                )}
              />
            </StyledContentBreadcrumb>
            {children}
          </StyledContent>
        </StyledWorkspace>
      </Content>
    </StyledDesigner>
  );
};
