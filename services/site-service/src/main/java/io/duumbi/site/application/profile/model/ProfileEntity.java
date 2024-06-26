package io.duumbi.site.application.profile.model;

import java.util.Optional;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class ProfileEntity {
    String name;
    Optional<String> email;
    Optional<String> picture;
}
