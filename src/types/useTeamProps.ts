import PlayerProps from "./usePlayerProps";

type TeamProps = {
  id?: string;
  name: string;
  website: string;
  description?: string;
  teamType: "fantasy" | "real";
  tags?: string[];

  players: (PlayerProps | undefined)[][]
  avgAge: number;

}

export default TeamProps;