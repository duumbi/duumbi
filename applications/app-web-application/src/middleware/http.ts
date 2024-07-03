import { Configuration, ConfigurationParameters, GetProfileRequest, Profile, ProfileApi, ProfileFromJSONTyped } from "../generated-sources/openapi";

async function createApiConfiguration(token: string): Promise<Configuration> {
    const service = import.meta.env.VITE_REACT_APP_SITE_SERVICE
    const configParams: ConfigurationParameters = {
        basePath: `${service}/api/v1`,
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    };

    return new Configuration(configParams);
}


export async function getProfile(sub: string, token: string): Promise<Profile> {
    const apiConfig = await createApiConfiguration(token);
    const profileApi = new ProfileApi(apiConfig);

    const requestParameters: GetProfileRequest = {
        id: sub,
    };

    return await profileApi.getProfile(requestParameters);
}

export async function getUserInfo(token: string): Promise<Profile> {
    const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;

    const response = await fetch(`https://${domain}/userinfo`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    });

    const resData = await response.json();

    if (!response.ok) {
        throw new Error('Failed to update user data.');
    }

    return ProfileFromJSONTyped(resData, false);
}

export async function updateUserProfile(id: string, profile: Profile, token: string): Promise<Profile> {
    const apiConfig = await createApiConfiguration(token);
    const profileApi = new ProfileApi(apiConfig);

    return await profileApi.updateProfile({ id: id, profile: profile });
}