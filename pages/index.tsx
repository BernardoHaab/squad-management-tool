import type { NextPage } from "next";

import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import HighlightedPlayers from "../src/components/HighlightedPlayers";
import MyTeams from "../src/components/MyTeams";
import TopFive from "../src/components/TopFive";
import PlayerProps from "../src/hooks/usePlayerProps";

const Home: NextPage = () => {
  const myTeams = [
    { name: "Barcelona", description: "Barcelona Squad", avgAge: 32.4 },
    { name: "Real Madrid", description: "Real Madrid Squad", avgAge: 25.4 },
    { name: "Milan", description: "Milan Squad", avgAge: 25.6 },
    { name: "Liverpool", description: "Liverpool Squad", avgAge: 37.4 },
    { name: "Barcelona", description: "Barcelona Squad", avgAge: 22.4 },
    { name: "Real Madrid", description: "Real Madrid Squad", avgAge: 23.7 },
    { name: "Milan", description: "Milan Squad", avgAge: 23.4 },
    { name: "Liverpool", description: "Liverpool Squad", avgAge: 20 },
    { name: "Barcelona", description: "Barcelona Squad", avgAge: 21.5 },
    { name: "Real Madrid", description: "Real Madrid Squad", avgAge: 26 },
    { name: "Milan", description: "Milan Squad", avgAge: 27.4 },
    { name: "Liverpool", description: "Liverpool Squad", avgAge: 27.3 },
  ];

  const mostPicked: PlayerProps = { name: "Cristiano Ronaldo", percetage: 75 };
  const lessPicked: PlayerProps = { name: "Cristiano Ronaldo", percetage: 75 };

  return (
    <div className="page-home">
      <Header userName="Bernardo Haab" />

      <main>
        <MyTeams myTeams={myTeams} />
        <TopFive
          highestAvgAge={myTeams.slice(0, 5)}
          lowestAvgAge={myTeams.slice(5, 10)}
        />
        <HighlightedPlayers mostPicked={mostPicked} lessPicked={lessPicked} />
      </main>

      <Footer />
    </div>
  );
};

export default Home;