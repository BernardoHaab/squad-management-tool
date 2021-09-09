import React from "react";
import { HighlightedPlayerProps } from "../types/usePlayerProps";

type HighlightedPlayerItemProps = {
  title: string;
  highlighted: HighlightedPlayerProps;
};

const HighlightedPlayerItem: React.FC<HighlightedPlayerItemProps> = ({
  title,
  highlighted,
}) => {
  console.log(highlighted);
  console.log(highlighted.player.lastname.charAt(0));

  return (
    <div className="highlighted-player-item">
      <h1>{title}</h1>

      <div className="player">
        <div className="player-hover">
          <div className="player-initials">
            {highlighted.player.firstname.charAt(0).toUpperCase()}
            {highlighted.player.lastname.charAt(0).toUpperCase()}
          </div>
        </div>
        <div className="percetage">
          <p>{highlighted.percetage}% &nbsp;&nbsp;</p>
        </div>
      </div>
    </div>
  );
};

export default HighlightedPlayerItem;
