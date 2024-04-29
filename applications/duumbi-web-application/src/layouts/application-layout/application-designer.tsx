import { Breadcrumb, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { styled } from "styled-components";
import { GoDatabase } from "react-icons/go";
import { ToolbarButton } from "../../components/designer/toolbar";
import { ApplicationDesignerConst } from "../../constants/designer-toolbar";
import { AppTheme } from "../../constants/theme";
import { useState } from "react";
import {
  Database,
  Collection,
  Environment,
  CurrentState,
  CoreProperties,
} from "../../types";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { BsCollection } from "react-icons/bs";
import { IoIosGitNetwork } from "react-icons/io";

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

function createBreadcrumbMenuItem(item: CoreProperties) {
  return {
    key: item.key,
    label: <a target="_blank">{item.name}</a>,
  };
}

function createBreadcrumbItem(
  itemState: CurrentState<CoreProperties>,
  icon: React.ReactNode
): ItemType {
  const itemsWithoutCurrent = itemState.items.filter(function (x) {
    return x.key !== itemState.key;
  });

  return {
    key: itemState.key,
    title: (
      <>
        {icon}
        <span> {itemState.name}</span>
      </>
    ),
    ...(itemsWithoutCurrent.length != 0
      ? {
          menu: {
            items: itemsWithoutCurrent.map((item) =>
              createBreadcrumbMenuItem(item)
            ),
          },
        }
      : {}),
  };
}

function createBreadcrumb(
  databaseState: CurrentState<Database>,
  collectionState: CurrentState<Collection>,
  environmentState: CurrentState<Environment>
): ItemType[] {
  return [
    databaseState.key !== ""
      ? createBreadcrumbItem(databaseState, <GoDatabase />)
      : {},
    databaseState.key !== "" && collectionState.key !== ""
      ? createBreadcrumbItem(collectionState, <BsCollection />)
      : {},
    environmentState.key !== "" && environmentState.key !== ""
      ? createBreadcrumbItem(environmentState, <IoIosGitNetwork />)
      : {},
  ];
}

export const ApplicationDesigner = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const [databaseState, setDatabaseState] = useState<CurrentState<Database>>({
    key: "info",
    name: "Info DB",
    items: [{ key: "info", name: "Info DB" }],
  });

  const [collectionState, setCollectionState] = useState<
    CurrentState<Collection>
  >({
    key: "coll1",
    name: "Demo 1",
    items: [{ key: "coll1", name: "Demo 1" }],
  });

  const [environmentState, setEnvironmentState] = useState<
    CurrentState<Environment>
  >({
    key: "env",
    name: "Environment 1",
    items: [{ key: "env", name: "Environment 1" }],
  });

  function handleDatabaseChange(database: string) {
    setDatabaseState({
      ...databaseState,
      name: database,
    });
  }

  function handleCollectionChange(collection: string) {
    setCollectionState({
      ...collectionState,
      name: collection,
    });
  }

  function handleEnvironmentChange(environment: string) {
    setEnvironmentState({
      ...environmentState,
      name: environment,
    });
  }

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
                  databaseState,
                  collectionState,
                  environmentState
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
