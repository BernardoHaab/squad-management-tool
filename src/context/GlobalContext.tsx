import { createContext } from "react";
import { HighlightedPlayerProps } from "../types/usePlayerProps";
import TeamProps from "../types/useTeamProps";

interface GlobalContextProps {
  myTeams: TeamProps[];
  setMyTeams: React.Dispatch<React.SetStateAction<TeamProps[]>>;
  mostPicked: HighlightedPlayerProps | null;
  setMostPicked: React.Dispatch<
    React.SetStateAction<HighlightedPlayerProps | null>
  >;
  lessPicked: HighlightedPlayerProps | null;
  setLessPicked: React.Dispatch<
    React.SetStateAction<HighlightedPlayerProps | null>
  >;
}

const GlobalContext = createContext<GlobalContextProps>({
  myTeams: [],
  setMyTeams: (
    value: TeamProps[] | ((prevState: TeamProps[]) => TeamProps[])
  ) => {},
  mostPicked: null,
  setMostPicked: (
    value:
      | HighlightedPlayerProps
      | null
      | ((
          prevState: HighlightedPlayerProps | null
        ) => HighlightedPlayerProps | null)
  ) => {},
  lessPicked: null,
  setLessPicked: (
    value:
      | HighlightedPlayerProps
      | null
      | ((
          prevState: HighlightedPlayerProps | null
        ) => HighlightedPlayerProps | null)
  ) => {},
});

export default GlobalContext;
