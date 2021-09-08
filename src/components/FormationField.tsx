import React from "react";
import PlayerProps, { SelectablePlayerProps } from "../types/usePlayerProps";
import FieldRow from "./FieldRow";

type FormationFieldProps = {
  playersPositions: (PlayerProps | undefined)[][];
  addPlayer: (
    player: PlayerProps,
    formationLine: number,
    formationColumn: number
  ) => void;
};

const FormationField: React.FC<FormationFieldProps> = ({
  playersPositions,
  addPlayer,
}) => {
  return (
    <div className="formation-field">
      {playersPositions.map((playersLine, formationLine) => (
        <FieldRow
          key={formationLine}
          playersLine={playersLine}
          formationLine={formationLine}
          addPlayer={addPlayer}
        />
      ))}
      <div className="football-field">
        <hr />
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default FormationField;
