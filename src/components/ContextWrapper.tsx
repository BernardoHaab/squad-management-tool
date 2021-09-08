import React, { useState } from "react";

import GlobalContext from "../context/GlobalContext";
import PlayerProps from "../types/usePlayerProps";
import TeamProps from "../types/useTeamProps";

type ContextWrapperProps = {
  children: JSX.Element;
  teamsList: TeamProps[];
};

const ContextWrapper: React.FC<ContextWrapperProps> = ({
  children,
  teamsList,
}) => {
  const [myTeams, setMyTeams] = useState<TeamProps[]>(teamsList);
  const [mostPicked, setMostPicked] = useState<PlayerProps | null>(null);
  const [lessPicked, setLessPicked] = useState<PlayerProps | null>(null);

  return (
    <GlobalContext.Provider
      value={{
        myTeams,
        setMyTeams,
        mostPicked,
        setMostPicked,
        lessPicked,
        setLessPicked,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
