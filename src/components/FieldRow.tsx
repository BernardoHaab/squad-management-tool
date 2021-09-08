import React from "react";
import PlayerProps, { SelectablePlayerProps } from "../types/usePlayerProps";
import PlayerFormationCard from "./PlayerFormationCard";

type FieldRowProps = {
  playersLine: (PlayerProps | undefined)[];
  formationLine: number;
  addPlayer: (
    player: PlayerProps,
    formationLine: number,
    formationColumn: number
  ) => void;
};

const FieldRow: React.FC<FieldRowProps> = ({
  playersLine,
  formationLine,
  addPlayer,
}) => {
  return (
    <div className="field-row">
      {playersLine.map((player, formationColumn) => {
        return (
          <PlayerFormationCard
            player={player}
            formationLine={formationLine}
            formationColumn={formationColumn}
            addPlayer={addPlayer}
            key={formationColumn}
          />
        );
      })}
    </div>
  );
};

export default FieldRow;
