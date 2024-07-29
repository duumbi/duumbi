package io.duumbi.app.application.profile.mapper;

import org.mapstruct.Mapper;

import io.duumbi.app.application.profile.model.ProfileEntity;
import io.duumbi.app.application.model.Profile;

import org.mapstruct.InjectionStrategy;

@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface ProfileMapper {
    Profile toDto(ProfileEntity profileEntity);
    ProfileEntity toEntity(Profile profile);
}
