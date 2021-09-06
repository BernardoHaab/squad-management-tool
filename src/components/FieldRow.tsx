import React from "react";
import PlayerFormationCard from "./PlayerFormationCard";

type FieldRowProps = {
  rowLenght: number;
};

const FieldRow: React.FC<FieldRowProps> = ({ rowLenght }) => {
  return (
    <div className="field-row">
      {Array(rowLenght)
        .fill(0)
        .map((_, id) => {
          return <PlayerFormationCard key={id} />;
        })}
    </div>
  );
};

export default FieldRow;
