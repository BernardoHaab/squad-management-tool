import React, { useEffect, useState } from "react";
import TeamProps from "../types/useTeamProps";

import Card from "./Card";
import TopFiveList from "./TopFiveList";

type TopFive = {
  highestAvgAge: TeamProps[];
  lowestAvgAge: TeamProps[];
};

const TopFive: React.FC<TopFive> = ({ highestAvgAge, lowestAvgAge }) => {
  return (
    <Card title="Top 5">
      {highestAvgAge.length > 0 && lowestAvgAge.length > 0 ? (
        <div className="top-five-content">
          <TopFiveList title="Highest avg age" topFive={highestAvgAge} />
          <TopFiveList title="Lowest avg age" topFive={lowestAvgAge} />
        </div>
      ) : (
        <div className="placeholder-wrapper">
          Here your teams will appear order by their Average Age.
        </div>
      )}
    </Card>
  );
};

export default TopFive;
