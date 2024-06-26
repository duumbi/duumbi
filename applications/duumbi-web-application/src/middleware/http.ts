import { Configuration, ConfigurationParameters, GetProfileRequest, Profile, ProfileApi } from "../generated-sources/openapi";

async function createApiConfiguration(token: string): Promise<Configuration> {
    const configParams: ConfigurationParameters = {
        basePath: 'http://localhost:3010/api/v1',
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