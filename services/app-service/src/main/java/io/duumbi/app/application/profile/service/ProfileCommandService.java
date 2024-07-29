package io.duumbi.app.application.profile.service;

import io.duumbi.app.application.profile.model.ProfileEntity;
import io.duumbi.app.framework.auth0.Auth0ManagementService;
import io.duumbi.app.framework.stereotype.service.CommandService;

@CommandService
public class ProfileCommandService {
    private final Auth0ManagementService auth0ManagementService;

    public ProfileCommandService(Auth0ManagementService auth0ManagementService) {
        this.auth0ManagementService = auth0ManagementService;
    }

    public int deleteProfile(String id) {
        return auth0ManagementService.deleteUser(id);
    }

    public ProfileEntity updateProfile(String id, ProfileEntity profile) {
        return auth0ManagementService.updateUser(id, profile);
    }
}
