import React from "react";

import PlayerProps from "../types/usePlayerProps";
import HighlightedPlayerItem from "./HighlightedPlayerItem";

type HighlightedPlayersProps = {
  mostPicked: PlayerProps;
  lessPicked: PlayerProps;
};

const HighlightedPlayers: React.FC<HighlightedPlayersProps> = ({
  mostPicked,
  lessPicked,
}) => {
  return (
    <div className="highlighted-container">
      <HighlightedPlayerItem title="Most picked player" player={mostPicked} />
      <div className="football-field">
        <hr />
        <div className="circle"></div>
      </div>
      <HighlightedPlayerItem title="Less picked player" player={lessPicked} />
    </div>
  );
};

export default HighlightedPlayers;
