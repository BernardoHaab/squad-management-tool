import { createContext } from "react";
import PlayerProps from "../types/usePlayerProps";
import TeamProps from "../types/useTeamProps";

interface GlobalContextProps {
  myTeams: TeamProps[];
  setMyTeams: React.Dispatch<React.SetStateAction<TeamProps[]>>;
  mostPicked: PlayerProps | null;
  setMostPicked: React.Dispatch<React.SetStateAction<PlayerProps | null>>;
  lessPicked: PlayerProps | null;
  setLessPicked: React.Dispatch<React.SetStateAction<PlayerProps | null>>;
}

const GlobalContext = createContext<GlobalContextProps>({
  myTeams: [],
  setMyTeams: (
    value: TeamProps[] | ((prevState: TeamProps[]) => TeamProps[])
  ) => {},
  mostPicked: null,
  setMostPicked: (
    value:
      | PlayerProps
      | null
      | ((prevState: PlayerProps | null) => PlayerProps | null)
  ) => {},
  lessPicked: null,
  setLessPicked: (
    value:
      | PlayerProps
      | null
      | ((prevState: PlayerProps | null) => PlayerProps | null)
  ) => {},
});

export default GlobalContext;
