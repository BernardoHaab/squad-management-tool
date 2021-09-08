import { createContext } from "react";
import TeamProps from "../types/useTeamProps";

interface GlobalContextProps {
  myTeams: TeamProps[];
  setMyTeams: React.Dispatch<React.SetStateAction<TeamProps[]>>;
}

const GlobalContext = createContext<GlobalContextProps>({
  myTeams: [],
  setMyTeams: (
    value: TeamProps[] | ((prevState: TeamProps[]) => TeamProps[])
  ) => {},
});

export default GlobalContext;
