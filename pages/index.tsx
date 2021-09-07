import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useContext } from "react";

import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import HighlightedPlayers from "../src/components/HighlightedPlayers";
import MyTeams from "../src/components/MyTeams";
import TopFive from "../src/components/TopFive";
import GlobalContext from "../src/context/GlobalContext";

import PlayerProps from "../src/types/usePlayerProps";
import TeamProps from "../src/types/useTeamProps";

const Home: NextPage = () => {
  // const tempMyTeams: TeamProps[] = [
  //   {
  //     name: "Barcelona",
  //     description: "Barcelona Squad",
  //     avgAge: 32.4,
  //     website: "http://site.com",
  //     teamType: "fantasy",
  //   },
  //   {
  //     name: "Real Madrid",
  //     description: "Real Madrid Squad",
  //     avgAge: 25.4,
  //     website: "http://site.com",
  //     teamType: "fantasy",
  //   },
  //   {
  //     name: "Milan",
  //     description: "Milan Squad",
  //     avgAge: 25.6,
  //     website: "http://site.com",
  //     teamType: "fantasy",
  //   },
  //   {
  //     name: "Liverpool",
  //     description: "Liverpool Squad",
  //     avgAge: 37.4,
  //     website: "http://site.com",
  //     teamType: "fantasy",
  //   },
  //   {
  //     name: "Barcelona",
  //     description: "Barcelona Squad",
  //     avgAge: 22.4,
  //     website: "http://site.com",
  //     teamType: "fantasy",
  //   },
  //   {
  //     name: "Real Madrid",
  //     description: "Real Madrid Squad",
  //     avgAge: 23.7,
  //     website: "http://site.com",
  //     teamType: "fantasy",
  //   },
  //   {
  //     name: "Milan",
  //     description: "Milan Squad",
  //     avgAge: 23.4,
  //     website: "http://site.com",
  //     teamType: "fantasy",
  //   },
  //   {
  //     name: "Liverpool",
  //     description: "Liverpool Squad",
  //     avgAge: 20,
  //     website: "http://site.com",
  //     teamType: "fantasy",
  //   },
  //   {
  //     name: "Barcelona",
  //     description: "Barcelona Squad",
  //     avgAge: 21.5,
  //     website: "http://site.com",
  //     teamType: "fantasy",
  //   },
  //   {
  //     name: "Real Madrid",
  //     description: "Real Madrid Squad",
  //     avgAge: 26,
  //     website: "http://site.com",
  //     teamType: "fantasy",
  //   },
  //   {
  //     name: "Milan",
  //     description: "Milan Squad",
  //     avgAge: 27.4,
  //     website: "http://site.com",
  //     teamType: "fantasy",
  //   },
  //   {
  //     name: "Liverpool",
  //     description: "Liverpool Squad",
  //     avgAge: 27.3,
  //     website: "http://site.com",
  //     teamType: "fantasy",
  //   },
  // ];

  // const mostPicked: PlayerProps = {
  //   firstname: "Cristiano Ronaldo",
  //   percetage: 75,
  //   age: 28,
  // };
  // const lessPicked: PlayerProps = {
  //   name: "Cristiano Ronaldo",
  //   percetage: 75,
  //   age: 28,
  // };
  const { myTeams } = useContext(GlobalContext);
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
        {/* <HighlightedPlayers mostPicked={mostPicked} lessPicked={lessPicked} /> */}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
