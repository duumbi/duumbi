package io.duumbi.site.application.profile.model;

import java.io.Serializable;
import java.util.Optional;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class ProfileEntity implements Serializable {
    private static final long serialVersionUID = 1L;
    String name;
    Optional<String> email;
    Optional<String> picture;

    public static ProfileEntity empty() {
        return ProfileEntity.builder().build();
    }
}
