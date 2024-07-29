import { Button, ConfigProvider, Result } from "antd";
import { InformationLayout } from "../layouts";
import { AppTheme } from "../constants/theme";

const NotFoundPage = () => {
  return (
    <InformationLayout>
      <ConfigProvider
        theme={{
          token: {
            colorTextHeading: AppTheme.colors.informationTextColor,
            colorTextDescription: AppTheme.colors.informationTextColor,
          },
          components: {
            Result: {
              titleFontSize: 44,
              subtitleFontSize: 24,
            },
          },
        }}
      >
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Button type="primary" href="/">
              Back Home
            </Button>
          }
        />
      </ConfigProvider>
    </InformationLayout>
  );
};

export default NotFoundPage;
