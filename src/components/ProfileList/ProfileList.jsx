import React from "react";
import "./ProfileList.scss";
import ProfileCard from "../ProfileCard/ProfileCard";

const ProfileList = ({ profiles }) => {
  const profilesListJSX = profiles.map((profile) => (
    
          <ProfileCard
            image={profile.image}
            name={profile.name}
            tagline={profile.tagline}
            description={profile.description}
            abv={profile.abv}
            ph={profile.ph}
          />
  )) 
  return (
    <div className="card-list">
        {profilesListJSX}
    </div>
  )     
  }


export default ProfileList;
