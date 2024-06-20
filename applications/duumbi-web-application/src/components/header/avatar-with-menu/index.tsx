import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Flex, Menu, Popover } from "antd";
import { CiUser } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { Text, UserAvatar } from "../../base";
import { styled } from "styled-components";

const StyledUserData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

const StyledAvatarUserData = styled.div`
  padding-left: 10px;
`;

const StyledDescriptionUserData = styled.div`
  padding-top: 4px;
  padding-right: 10px;
  padding-left: 10px;
  align-items: strecth;
  justify-content: flex-start;
`;

export const AvatarWithMenu = () => {
  const {user, logout} = useAuth0();

  // const {user, logout, getAccessTokenSilently} = useAuth0();
  // const [isLoading, setIsLoading] = useState(false);
  // const [apiResponse, setApiResponse] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       console.log("getAccessTokenSilently");

  //       const token = await getAccessTokenSilently({
  //         authorizationParams: {
  //           audience: 'https://api.site-ne.duumbi.io',
  //           scope: 'openid profile email offline_access',
  //         },
  //       });
  //       console.log("token", token);
  //       const response = await fetch('https://httpbin.org/get', {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setApiResponse(await response.json());
  //     } catch (e) {
  //       // Handle errors such as `login_required` and `consent_required` by re-prompting for a login
  //       console.error(e);
  //     }
  //   })();
  // }, [getAccessTokenSilently]);


  // useEffect(() => {
  //   async function fetchData() {
  //     setIsLoading(true);

  //     const token = await getAccessTokenSilently({
  //       authorizationParams: {
  //         audience: "https://api.site-ne.duumbi.io",
  //         scope: 'read:profile',
  //       },
  //     });
  //     console.log("token", token);

  //     const response = await fetch("http://localhost:3010/api/v1/user", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     // console.log("token", token);

  //     const responseData = await response.json();
  //     console.log(responseData);

  //     setApiResponse(responseData);
  //     setIsLoading(false);
  //   }
  //   fetchData();
  // }, [getAccessTokenSilently]);


  const userPicture = user
    ? user.picture
    : "https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png";

  const content = (
    <div>
      <StyledUserData>
        <StyledAvatarUserData>
          <Avatar src={userPicture} />
        </StyledAvatarUserData>
        <StyledDescriptionUserData>
          <Flex gap="smal" vertical>
            <Text strong style={{ justifyContent: "flex-start" }}>
              {user?.name}
            </Text>
            <Text disabled style={{ justifyContent: "flex-start" }}>
              {user?.nickname}
            </Text>
          </Flex>
        </StyledDescriptionUserData>
      </StyledUserData>
      <Menu
        items={[
          {
            type: "divider",
          },
          {
            key: "profile",
            label: "Your profile",
            icon: <CiUser />,
          },
          {
            key: "signout",
            label: "Sign out",
            icon: <IoIosLogOut />,
            onClick: () => {
              logout({ logoutParams: { returnTo: window.location.origin } });
            }
          },
        ]}
      />
    </div>
  );

  return (
    <>
      <Popover
        placement="bottomRight"
        trigger="click"
        overlayInnerStyle={{ padding: 0 }}
        overlayStyle={{ zIndex: 999 }}
        content={content}
      >
        <UserAvatar
          name={user?.name}
          src={user?.picture}
          size="default"
          style={{ cursor: "pointer" }}
        />
      </Popover>
    </>
  );
};
