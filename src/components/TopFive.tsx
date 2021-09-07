import React, { useEffect, useState } from "react";
import TeamProps from "../types/useTeamProps";

import Card from "./Card";
import TopFiveList from "./TopFiveList";

type TopFive = {
  highestAvgAge: TeamProps[];
  lowestAvgAge: TeamProps[];
};

const TopFive: React.FC<TopFive> = ({ highestAvgAge, lowestAvgAge }) => {
  const [sortedHighest, setSortedHighest] = useState<TeamProps[]>([]);
  const [sortedLowest, setSortedLowest] = useState<TeamProps[]>([]);

  useEffect(() => {
    setSortedHighest(highestAvgAge.sort((a, b) => b.avgAge - a.avgAge));
    setSortedLowest(lowestAvgAge.sort((a, b) => a.avgAge - b.avgAge));
  }, [highestAvgAge, lowestAvgAge]);

  return (
    <Card title="Top 5">
      <div className="top-five-content">
        <TopFiveList title="Highest avg age" topFive={sortedHighest} />
        <TopFiveList title="Lowest avg age" topFive={sortedLowest} />
      </div>
    </Card>
  );
};

export default TopFive;
