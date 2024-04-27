import { Layout } from "antd";
import { ApplicationHeader } from "./application-header";
import { ApplicationDesigner } from "./application-designer";
import { styled } from "styled-components";

const StyledLayout = styled(Layout)`
  height: 100vh;
  width: 100vw;
`;

export const ApplicationLayout = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  return (
    <>
      <StyledLayout>
        <ApplicationHeader />
        <ApplicationDesigner>{children}</ApplicationDesigner>
      </StyledLayout>
    </>
  );
};
