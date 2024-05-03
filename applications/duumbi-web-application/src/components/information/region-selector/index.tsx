import { Button, Card, Flex, Space } from "antd";
import { styled } from "styled-components";
import { Text } from "../../base";
import { useContext, useState } from "react";
import { ApplicationContext } from "../../../context/application-context";
import { ApplicationContextType } from "../../../types";
import { Navigate } from "react-router-dom";
import regionImg from "../../../assets/img/region.png";
import { RegionCode } from "../../../constants/enums";

const StyledImg = styled.img`
  display: block;
  width: 200px;
`;

const StyledFlex = styled(Flex)`
  padding: 22px;
`;

const StyledButton = styled(Button)`
  width: 150px;
`;

export const RegionSelector = () => {
  const [regionState, setRegionState] = useState<boolean>(false);
  const { application, setRegion } = useContext(
    ApplicationContext
  ) as ApplicationContextType;

  function navigationHandler(regionCode: RegionCode) {
    setRegion(regionCode);
    setRegionState(true);
  }

  const activeRegion = (regionCode: RegionCode) => {
    return application?.region === regionCode ? "primary" : "default";
  };

  if (regionState) {
    return <Navigate to="/" replace />;
  }

  return (
    <Card
      style={{ width: 760 }}
      styles={{ body: { padding: 0, overflow: "hidden" } }}
    >
      <Flex>
        <StyledImg alt="Region" src={regionImg} />
        <StyledFlex vertical align="flex-start" justify="space-between">
          <Text size="xxl">Region</Text>
          <Text size="sm">
            We can host all of your data in any of these regions. Useful if you
            want to specify where to have your data hosted for any reason
          </Text>
          <Flex>
            <Space size="middle">
              <StyledButton
                onClick={() => navigationHandler(RegionCode.CH)}
                type={activeRegion(RegionCode.CH)}
              >
                🇨🇳 China
              </StyledButton>
              <StyledButton
                onClick={() => navigationHandler(RegionCode.EU)}
                type={activeRegion(RegionCode.EU)}
              >
                🇪🇺 European Union
              </StyledButton>
              <StyledButton
                onClick={() => navigationHandler(RegionCode.US)}
                type={activeRegion(RegionCode.US)}
              >
                🇺🇸 United States
              </StyledButton>
            </Space>
          </Flex>
        </StyledFlex>
      </Flex>
    </Card>
  );
};
