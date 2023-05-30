import React from "react";
import Team from "./Team";
import { useGetTeamQuery } from "../../../features/getTeam/getTeamApi";
function Teams() {
  const { data: teams, isLoading, isError } = useGetTeamQuery();
  let content = null;
  console.log(teams);
  if (isLoading) {
    content = <p>Loading.....</p>;
  } else if (!isLoading && isError) {
    content = <p>There is an error</p>;
  } else if (!isLoading && !isError && teams?.length === 0) {
    content = <p>There is not team member found</p>;
  } else if (!isLoading && !isError && teams?.length > 0) {
    content = teams.map((team) => {
      return <Team key={team.id} team={team} />;
    });
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold">Team Members</h3>
      <div className="mt-3 space-y-4">{content}</div>
    </div>
  );
}

export default Teams;
