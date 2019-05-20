
import React from "react";

import { ProfileDiv } from "../../Helper";

const AvatarCard = props => {
  return (
    <ProfileDiv className="profile-panel">
      <div className="profile-header">
        <img src="" alt="" />
        <h1>
          {props.user.username[0].toUpperCase()}
          {props.user.username.slice(1, props.user.username.length)}
        </h1>
      </div>
      <div className="profile-content">
        <p>
          {props.user.lastName}, {props.user.firstName}
        </p>
        <p>{props.user.email}</p>
        <p>{props.user.cohort}</p>
        <p>ID: {props.user.user_id}</p>
      </div>
    </ProfileDiv>
  );
};

export default AvatarCard;