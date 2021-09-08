import React from "react";
import { useDrag } from "react-dnd";
import { DraggTypes } from "../types/useDraggType";

import PlayerProps, { SelectablePlayerProps } from "../types/usePlayerProps";

type PlayerItemProps = {
  player: PlayerProps & SelectablePlayerProps;
};

const PlayerItem: React.FC<PlayerItemProps> = ({ player }) => {
  const { isSelected, ...destructuredPlayer } = player;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DraggTypes.SEARCHED_PLAYERS,
    item: { player: destructuredPlayer, origin: "SearchList" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <div
      style={{ visibility: isDragging ? "hidden" : "visible" }}
      ref={drag}
      className="player-item"
    >
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
          <p>{player.country?.name}</p>
        </span>
      </span>
    </div>
  );
};

export default PlayerItem;
