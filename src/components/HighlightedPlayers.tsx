import React from "react";

import PlayerProps from "../hooks/usePlayerProps";
import PlayerItem from "./PlayerItem";

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
      <PlayerItem title="Most picked player" player={mostPicked} />
      <div className="football-field">
        <hr />
        <div className="circle"></div>
      </div>
      <PlayerItem title="Less picked player" player={lessPicked} />
    </div>
  );
};

export default HighlightedPlayers;
