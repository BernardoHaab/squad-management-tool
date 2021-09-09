import React from "react";
import Link from "next/link";

import TeamProps from "../types/useTeamProps";

type TeamsItemProps = {
  team: TeamProps;
  deleteTeam: (team: TeamProps) => void;
};

const TeamsItem: React.FC<TeamsItemProps> = ({ team, deleteTeam }) => {
  return (
    <div className="teams-item">
      <div className="item">
        <p className="name">{team.name}</p>
        <span>
          <p className="description">{team.description}</p>
          <div className="actions">
            <i
              onClick={() => deleteTeam(team)}
              title="Delete"
              className="material-icons"
            >
              delete
            </i>
            <Link
              href={{
                pathname: "/CreateTeam",
                query: { editingTeamId: team.id },
              }}
              passHref
            >
              <i title="Edit" className="material-icons">
                edit
              </i>
            </Link>
          </div>
        </span>
      </div>
      <hr />
    </div>
  );
};

export default TeamsItem;
