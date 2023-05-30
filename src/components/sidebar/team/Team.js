import React from "react";

function Team({ team }) {
  const { name, avatar } = team || {};

  console.log(name, avatar);
  return (
    <div className="checkbox-container">
      <img src={avatar} className="team-avater" />
      <p className="label">{name}</p>
    </div>
  );
}

export default Team;
