package io.duumbi.app.application.profile.model;

import java.io.IOException;
import java.util.Optional;

import com.hazelcast.nio.ObjectDataInput;
import com.hazelcast.nio.ObjectDataOutput;
import com.hazelcast.nio.serialization.StreamSerializer;

public class ProfileEntitySerializer implements StreamSerializer<ProfileEntity> {

    @Override
    public int getTypeId() {
        // Unique identifier for this serializer. Make sure it doesn't clash with other serializer IDs.
        return 42;
    }

    @Override
    public void write(ObjectDataOutput out, ProfileEntity profileEntity) throws IOException {
        out.writeString(profileEntity.getName());
        out.writeString(profileEntity.getEmail().orElse(null));
        out.writeString(profileEntity.getPicture().orElse(null));
    }

    @Override
    public ProfileEntity read(ObjectDataInput in) throws IOException {
        String name = in.readString();
        String email = in.readString();
        String picture = in.readString();

        return ProfileEntity.builder()
                .name(name)
                .email(Optional.ofNullable(email))
                .picture(Optional.ofNullable(picture))
                .build();
    }

    @Override
    public void destroy() {
    }
}
