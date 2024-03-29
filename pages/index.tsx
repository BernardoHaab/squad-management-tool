import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useContext } from "react";
import Head from "next/head";

import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import HighlightedPlayers from "../src/components/HighlightedPlayers";
import MyTeams from "../src/components/MyTeams";
import TopFive from "../src/components/TopFive";
import GlobalContext from "../src/context/GlobalContext";

import TeamProps from "../src/types/useTeamProps";

const Home: NextPage = () => {
  const { myTeams, setMyTeams, mostPicked, lessPicked } =
    useContext(GlobalContext);
  const [sortedHighest, setSortedHighest] = useState<TeamProps[]>([]);
  const [sortedLowest, setSortedLowest] = useState<TeamProps[]>([]);
  const [sortedMyTeams, setSortedMyTeams] = useState<TeamProps[]>([]);

  useEffect(() => {
    setSortedHighest(myTeams.sort((a, b) => b.avgAge - a.avgAge).slice(0, 5));
    setSortedLowest(myTeams.sort((a, b) => a.avgAge - b.avgAge).slice(0, 5));
    setSortedMyTeams(
      myTeams.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
    );
  }, [myTeams]);

  function deleteTeam(team: TeamProps) {
    const updatedTeam = myTeams.filter((t) => t !== team);
    setMyTeams(updatedTeam);
  }

  return (
    <div className="page-home">
      <Head>
        <title>Squad Management Tool | My Teams</title>
      </Head>
      <Header userName="Bernardo Haab" />

      <main>
        <MyTeams deleteTeam={deleteTeam} myTeams={sortedMyTeams} />
        <TopFive highestAvgAge={sortedHighest} lowestAvgAge={sortedLowest} />
        <HighlightedPlayers mostPicked={mostPicked} lessPicked={lessPicked} />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
