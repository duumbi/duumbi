package io.duumbi.site.application.profile.mapper;

import org.mapstruct.Mapper;

import io.duumbi.site.application.model.Profile;
import io.duumbi.site.application.profile.model.ProfileEntity;

import org.mapstruct.InjectionStrategy;

@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface ProfileMapper {
    Profile convertToDto(ProfileEntity profileEntity);
}
