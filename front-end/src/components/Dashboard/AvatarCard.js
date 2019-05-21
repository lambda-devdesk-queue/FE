
import React from "react";
import { ProfileDiv } from "../../Helper";

const AvatarCard = props => {
  return (
    <div class="w3-container">
      <div class="w3-card-4 w3-dark-grey">
    <ProfileDiv className="profile-panel">
      <div className="profile-header">
      <img className="image"
            src={require(`../../assets/img_avatar.png`)}
            alt="DevDeskQue"
          />
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
    </div>
    </div>
  );
};

export default AvatarCard;