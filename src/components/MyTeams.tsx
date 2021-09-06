import React from "react";
import Image from "next/image";

import TeamProps from "../types/useTeamProps";

import SortIcon from "../assets/icons/icons8-sort.png";

import TeamsItem from "./TeamsItem";
import Card from "./Card";

type MyTeamsProps = {
  myTeams: TeamProps[];
};

const MyTeams: React.FC<MyTeamsProps> = ({ myTeams }) => {
  return (
    <Card title="My Teams" hasCreateButton={true} className="my-teams">
      <div className="teams-table">
        <div className="sorter">
          <span title="Sort Teams by Name">
            <p>Name</p>
            <i>
              <Image
                src={SortIcon}
                alt="sort teams by name"
                width={12}
                height={12}
              />
            </i>
          </span>

          <span title="Sort Teams by Description">
            <p>Description</p>
            <i>
              <Image
                src={SortIcon}
                alt="sort teams by description"
                width={12}
                height={12}
              />
            </i>
          </span>
        </div>
        <ul className="teams-list">
          {myTeams.map((team, id) => (
            <TeamsItem key={id} team={team} />
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default MyTeams;
