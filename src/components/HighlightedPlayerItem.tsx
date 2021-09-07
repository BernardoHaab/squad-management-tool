import React from "react";
import PlayerProps from "../types/usePlayerProps";

type HighlightedPlayerItemProps = {
  title: string;
  player: PlayerProps;
};

const HighlightedPlayerItem: React.FC<HighlightedPlayerItemProps> = ({
  title,
  player,
}) => {
  return (
    <div className="highlighted-player-item">
      <h1>{title}</h1>

      <div className="player">
        <div className="player-hover">
          <div className="player-initials">
            {player.firstname.charAt(0).toUpperCase()}
            {player.lastname.charAt(0).toUpperCase}
          </div>
        </div>
        <div className="percetage">
          <p>{player.percetage}% &nbsp;&nbsp;</p>
        </div>
      </div>
    </div>
  );
};

export default HighlightedPlayerItem;
