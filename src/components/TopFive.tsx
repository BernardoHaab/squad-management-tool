import React from "react";
import TeamProps from "../hooks/useTeamProps";

import Card from "./Card";
import TopFiveList from "./TopFiveList";

type TopFive = {
  highestAvgAge: TeamProps[];
  lowestAvgAge: TeamProps[];
};

const TopFive: React.FC<TopFive> = ({ highestAvgAge, lowestAvgAge }) => {
  return (
    <Card title="Top 5">
      <div className="top-five-content">
        <TopFiveList title="Highest avg age" topFive={highestAvgAge} />
        <TopFiveList title="Lowest avg age" topFive={lowestAvgAge} />
      </div>
    </Card>
  );
};

export default TopFive;
