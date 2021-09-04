import React from "react";

type PlayerItemProps = {
  title: string;
  player: {
    name: string;
    percetage: number;
  };
};

const PlayerItem: React.FC<PlayerItemProps> = ({ title, player }) => {
  const splitedName = player.name.split(" ");

  return (
    <div className="player-item">
      <h1>{title}</h1>

      <div className="player">
        <div className="player-hover">
          <div className="player-initials">
            {player.name.charAt(0).toUpperCase()}
            {splitedName.length >= 2 &&
              splitedName[splitedName.length - 1].charAt(0).toUpperCase()}
          </div>
        </div>
        <div className="percetage">
          <p>{player.percetage}% &nbsp;&nbsp;</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerItem;
