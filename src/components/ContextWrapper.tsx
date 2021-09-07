import React, { useState } from "react";

import GlobalContext from "../context/GlobalContext";
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

  return (
    <GlobalContext.Provider value={{ myTeams, setMyTeams }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
