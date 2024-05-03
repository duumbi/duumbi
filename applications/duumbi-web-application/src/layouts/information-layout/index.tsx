import { Flex } from "antd";
import { styled } from "styled-components";
import { AppTheme } from "../../constants/theme";

const StyledFlex = styled(Flex)`
  height: 100vh;
  width: 100vw;
  background-color: ${AppTheme.colors.informationBackground};
`;

export const InformationLayout = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  return (
    <StyledFlex justify="center" align="center">
      {children}
    </StyledFlex>
  );
};
