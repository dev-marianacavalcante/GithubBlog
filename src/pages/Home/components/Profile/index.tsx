import { ExternalLink } from "../../../../components/externalLink";

import { useCallback, useEffect, useState } from "react";

import { api } from "../../../../lib/axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

import { ProfileContainer, ProfileDetails, ProfileImg } from "./styles";
import { Spinner } from "../../../../components/Spinner";

const username = import.meta.env.VITE_GITHUB_USERNAME;

interface ProfileData {
  login: string;
  bio: string;
  avartar_url: string;
  html_url: string;
  name: string;
  company?: string;
  followers: number;
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>(
    {} as ProfileData
  );
  const [isLoading, setIsLoading] = useState(true);

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/users/${username}`);

      setProfileData(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [profileData]);

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <ProfileContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ProfileImg src={profileData.avartar_url} />

          <ProfileDetails>
            <header>
              <h1>{profileData.name}</h1>
              <ExternalLink
                text="Github"
                href={profileData.html_url}
                target="_blank"
              />
            </header>
            <p>{profileData.bio}</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {profileData.login}
              </li>
              {profileData?.company && (
                <li>
                  <FontAwesomeIcon icon={faBuilding} />
                  {profileData.company}
                </li>
              )}
              <li>
                <FontAwesomeIcon icon={faUserGroup} />
                {profileData.followers} seguidores
              </li>
            </ul>
          </ProfileDetails>
        </>
      )}
    </ProfileContainer>
  );
}
