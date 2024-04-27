import { Breadcrumb, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { styled } from "styled-components";

import { BsCollection } from "react-icons/bs";
import { IoIosGitNetwork } from "react-icons/io";
import { GoDatabase } from "react-icons/go";
import { ToolbarButton } from "../../components/designer/toolbar";
import { ApplicationDesignerConst } from "../../constants/functions";

const StyledDesigner = styled(Layout)`
  background-color: #f5f5f5;
`;

const StyledWorkspace = styled.div`
  background-color: #f5f5f5;
  display: flex;
  padding-top: 17px;
  padding-left: 17px;
`;

const StyledToolbar = styled.div`
  top: 80px;
  left: 20px;
  width: 60px;
  background-color: #ffffff;
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

export const ApplicationDesigner = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const collectionItems = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          Other Item
        </a>
      ),
    },
  ];

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
            </StyledContentBreadcrumb>
            {children}
          </StyledContent>
        </StyledWorkspace>
      </Content>
    </StyledDesigner>
  );
};
