import React from "react";
import Link from "next/link";

import { HighlightedPlayerProps } from "../types/usePlayerProps";
import HighlightedPlayerItem from "./HighlightedPlayerItem";

type HighlightedPlayersProps = {
  mostPicked: HighlightedPlayerProps | null;
  lessPicked: HighlightedPlayerProps | null;
};

const HighlightedPlayers: React.FC<HighlightedPlayersProps> = ({
  mostPicked,
  lessPicked,
}) => {
  return (
    <div className="highlighted-container">
      {mostPicked !== null && lessPicked !== null
        ? MostLessPicked(mostPicked, lessPicked)
        : NoPlayer()}
    </div>
  );
};

const MostLessPicked = (
  mostPicked: HighlightedPlayerProps,
  lessPicked: HighlightedPlayerProps
) => (
  <>
    <HighlightedPlayerItem
      title="Most picked player"
      highlighted={mostPicked}
    />
    <div className="football-field">
      <hr />
      <div className="circle"></div>
    </div>
    <HighlightedPlayerItem
      title="Less picked player"
      highlighted={lessPicked}
    />
  </>
);

const NoPlayer = () => (
  <div className="placeholder-wrapper">
    Looks like you haven&apos;t created a team yet.&nbsp;
    <Link href="/CreateTeam" passHref>
      <p className="crea-team-link">Try it out.</p>
    </Link>
  </div>
);

export default HighlightedPlayers;
