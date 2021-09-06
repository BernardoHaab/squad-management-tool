import React from "react";
import FieldRow from "./FieldRow";

type FormationFieldProps = {
  selectedFormation: number[];
};

const FormationField: React.FC<FormationFieldProps> = ({
  selectedFormation,
}) => {
  return (
    <div className="formation-field">
      {selectedFormation.map((row, id) => (
        <FieldRow key={id} rowLenght={row} />
      ))}
      <div className="football-field">
        <hr />
        <div className="circle"></div>
      </div>
      <FieldRow rowLenght={1} />
    </div>
  );
};

export default FormationField;
