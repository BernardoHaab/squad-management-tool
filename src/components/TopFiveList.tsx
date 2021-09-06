import React from "react";

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
        {topFive.map((item, id) => (
          <div key={id} className="item">
            <p>{item.name}</p>
            <p id="team-avg">{item.avgAge}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopFiveList;
