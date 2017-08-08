package nl.zzpmatcher.profile.controller;

import lombok.Data;
import nl.zzpmatcher.profile.business.Profile;
import nl.zzpmatcher.profile.business.Tag;

@Data
public class ProfileProjection {
    private final String username;
    private final String[] tags;

    public static ProfileProjection of(Profile profile) {
        if(profile==null)
            return null;

        final String[] tags = profile.getTags().stream().map(Tag::getId).toArray(String[]::new);

        return new ProfileProjection(profile.getId(), tags);
    }
}
