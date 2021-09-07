import PlayerProps from "./usePlayerProps";

type TeamProps = {
  name: string;
  website: string;
  description?: string;
  teamType: "fantasy" | "real";
  tags?: string[];

  players?: PlayerProps[]
  avgAge: number;

}

export default TeamProps;