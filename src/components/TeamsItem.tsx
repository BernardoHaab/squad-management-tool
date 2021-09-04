import React from "react";

import TeamProps from "../hooks/useTeamProps";

type TeamsItemProps = {
  team: TeamProps;
};

const TeamsItem: React.FC<TeamsItemProps> = ({ team }) => {
  return (
    <div className="teams-item">
      <div className="item">
        <p className="name">{team.name}</p>
        <span>
          <p className="description">{team.description}</p>
          <div className="actions">
            <i title="Delete" className="material-icons">
              delete
            </i>
            <i title="Edit" className="material-icons">
              edit
            </i>
          </div>
        </span>
      </div>
      <hr />
    </div>
  );
};

export default TeamsItem;
