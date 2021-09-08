import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { DraggTypes, ItemProps } from "../types/useDraggType";
import PlayerProps from "../types/usePlayerProps";

type PlayerFormationCardProps = {
  player: PlayerProps | undefined;
  formationLine: number;
  formationColumn: number;
  addPlayer: (
    player: PlayerProps,
    formationLine: number,
    formationColumn: number
  ) => void;
};

const PlayerFormationCard: React.FC<PlayerFormationCardProps> = ({
  player,
  formationLine,
  formationColumn,
  addPlayer,
}) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: DraggTypes.SEARCHED_PLAYERS,
    drop: (item: ItemProps, monitor) => {
      addPlayer(item.player, formationLine, formationColumn);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = (canDrop && isOver) || player !== undefined;

  return (
    <div
      ref={drop}
      className="player-formation-card"
      style={{
        borderColor: canDrop && isOver ? "#fff" : "#a87ecb",
      }}
    >
      <div
        style={{
          borderColor: isActive ? "transparent" : "#6c1f51",
          background: isActive ? "#88206db3" : "#d19abcb3",
        }}
      >
        {player === undefined ? AddPlayerCard() : SelectedPlayerCard(player)}
      </div>
    </div>
  );
};

const AddPlayerCard = () => <span className="material-icons">add</span>;

const SelectedPlayerCard = (player: PlayerProps) => (
  <span className="player-initials">
    {player.firstname.charAt(0).toUpperCase()}
    {player.lastname.charAt(0).toUpperCase()}
  </span>
);

export default PlayerFormationCard;
