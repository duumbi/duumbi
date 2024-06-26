import { useAuth0 } from "@auth0/auth0-react";
import { Alert, Descriptions } from "antd";
import { useEffect, useState } from "react";
import { Profile } from "../../../generated-sources/openapi";
import { getProfile } from "../../../middleware/http";

interface DrawerProfileProps {
  setIsLoading: (value: React.SetStateAction<boolean>) => void;
}

export const DrawerProfile = ({
  setIsLoading,
}: DrawerProfileProps): JSX.Element => {
  const {user, getAccessTokenSilently} = useAuth0();
  const [apiResponse, setApiResponse] = useState<Profile>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      const token = await getAccessTokenSilently({
        authorizationParams: {
          scope: "read:profile",
        },
      });

      try {
        const response = await getProfile(user?.sub ? user.sub : "", token);
        setApiResponse(response);
        setIsLoading(false);
      } catch (e) {
        if (e instanceof Error) {
          setError("Could not fetch data, please try again later.");
          newrelic.noticeError(e);
        } else {
          const message =
            "An unexpected error occurred. Please try again later.";
          setError(message);
          newrelic.noticeError(new Error(message));
        }
        setIsLoading(false);
      }
    }
    fetchData();
  }, [getAccessTokenSilently]);

  if (error) {
    return (
      <Alert
        message="Error"
        description={error}
        type="error"
        showIcon
      />
    );
  }

  return (
    <Descriptions layout="vertical">
      <Descriptions.Item label="API:UserName">
        {apiResponse?.name}
      </Descriptions.Item>
      <Descriptions.Item label="API:Email">
        {apiResponse?.email}
      </Descriptions.Item>
      <Descriptions.Item label="Auth0:Email">{user?.email}</Descriptions.Item>
      <Descriptions.Item label="Auth0:name">{user?.name}</Descriptions.Item>
      <Descriptions.Item label="Address">
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
      </Descriptions.Item>
    </Descriptions>
  );
};
