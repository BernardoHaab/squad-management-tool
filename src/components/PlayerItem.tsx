import React from "react";
import PlayerProps from "../types/usePlayerProps";

type PlayerItemProps = {
  player: PlayerProps;
  addPlayer: (player: PlayerProps) => void;
};

const PlayerItem: React.FC<PlayerItemProps> = ({ player, addPlayer }) => {
  return (
    <div onClick={() => addPlayer(player)} className="player-item">
      <span>
        <span>
          <h4>Name: </h4>
          <p>
            {player.firstname} {player.lastname}
          </p>
        </span>
        <span>
          <h4>Age: </h4>
          <p>{player.age}</p>
        </span>
      </span>
      <span>
        <span>
          <h4>Nacionality: </h4>
          <p>{player.country.name}</p>
        </span>
      </span>
    </div>
  );
};

export default PlayerItem;
