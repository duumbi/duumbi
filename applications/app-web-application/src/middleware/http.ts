import { Configuration, ConfigurationParameters, GetProfileRequest, Profile, ProfileApi, ProfileFromJSONTyped } from "../generated-sources/openapi";
import { ApplicationInterface } from "../types";

export function parseRegion(token: string): string {
    const appitem: ApplicationInterface = JSON.parse(localStorage.getItem("application") || "[]");
    const { region } = appitem;

    let authDomain = "";

    switch (region) {
        case "US":
            authDomain = "us";
            break;
        case "EU":
            authDomain = "eu";
            break;
        case "CH":
            authDomain = "eu";
            break;
        default:
            authDomain = "eu";
            break;
    }

    return token.replace("%REGION%", authDomain);
}

export function getAuth0Domain(): string {
    const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;

    return parseRegion(domain);
}

export function getAppServiceAudience(): string {
    const audience = import.meta.env.VITE_APP_SERVICE_AUDIENCE;

    return parseRegion(audience);
}

async function createApiConfiguration(token: string): Promise<Configuration> {
    const serviceUrl = import.meta.env.VITE_APP_SERVICE_URL
    const configParams: ConfigurationParameters = {
        basePath: `${serviceUrl}/api/v1`,
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
    const domain = getAuth0Domain();

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