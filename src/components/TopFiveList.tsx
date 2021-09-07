import React from "react";
import Link from "next/link";

import TeamProps from "../types/useTeamProps";

type TopFiveListProps = {
  title: string;
  topFive: TeamProps[];
};

const TopFiveList: React.FC<TopFiveListProps> = ({ title, topFive }) => {
  return (
    <div className="list-container">
      <h3>{title}</h3>
      <div className="list">
        {topFive.map((team, id) => (
          <Link
            key={id}
            href={{
              pathname: "/CreateTeam",
              query: { editingTeamId: team.id },
            }}
            passHref
          >
            <div className="item">
              <p>{team.name}</p>
              <p id="team-avg">{team.avgAge}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopFiveList;
