import type { NextPage } from "next";

import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import MyTeams from "../src/components/MyTeams";

const Home: NextPage = () => {
  const myTeams = [
    { name: "Barcelona", description: "Barcelona Squad" },
    { name: "Real Madrid", description: "Real Madrid Squad" },
    { name: "Milan", description: "Milan Squad" },
    { name: "Liverpool", description: "Liverpool Squad" },
    { name: "Barcelona", description: "Barcelona Squad" },
    { name: "Real Madrid", description: "Real Madrid Squad" },
    { name: "Milan", description: "Milan Squad" },
    { name: "Liverpool", description: "Liverpool Squad" },
    { name: "Barcelona", description: "Barcelona Squad" },
    { name: "Real Madrid", description: "Real Madrid Squad" },
    { name: "Milan", description: "Milan Squad" },
    { name: "Liverpool", description: "Liverpool Squad" },
  ];

  return (
    <div className="page-home">
      <Header userName="Bernardo Haab" />

      <main>
        <MyTeams myTeams={myTeams} />
        <div className="top-five">Top 5</div>
        <div className="highlighted-players">Highlighted Players</div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
