import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useContext } from "react";

import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import HighlightedPlayers from "../src/components/HighlightedPlayers";
import MyTeams from "../src/components/MyTeams";
import TopFive from "../src/components/TopFive";
import GlobalContext from "../src/context/GlobalContext";

import TeamProps from "../src/types/useTeamProps";

const Home: NextPage = () => {
  const { myTeams, mostPicked, lessPicked } = useContext(GlobalContext);
  const [sortedHighest, setSortedHighest] = useState<TeamProps[]>([]);
  const [sortedLowest, setSortedLowest] = useState<TeamProps[]>([]);

  useEffect(() => {
    setSortedHighest(myTeams.sort((a, b) => b.avgAge - a.avgAge).slice(0, 5));
    setSortedLowest(myTeams.sort((a, b) => a.avgAge - b.avgAge).slice(0, 5));
  }, [myTeams]);

  return (
    <div className="page-home">
      <Header userName="Bernardo Haab" />

      <main>
        <MyTeams myTeams={myTeams} />
        <TopFive highestAvgAge={sortedHighest} lowestAvgAge={sortedLowest} />
        <HighlightedPlayers mostPicked={mostPicked} lessPicked={lessPicked} />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
