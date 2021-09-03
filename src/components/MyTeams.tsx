import React from "react";
import Image from "next/image";

import SortIcon from "../assets/icons/icons8-sort.png";

import TeamsItem from "./TeamsItem";

type MyTeamsProps = {
  myTeams: {
    name: string;
    description: string;
  }[];
};

const MyTeams: React.FC<MyTeamsProps> = ({ myTeams }) => {
  return (
    <div className="my-teams">
      <span className="header">
        <p>My Teams</p>
        <button>+</button>
      </span>
      <span className="main">
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
      </span>
    </div>
  );
};

export default MyTeams;
