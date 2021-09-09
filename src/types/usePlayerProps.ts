type PlayerProps = {
  player_id: number;
  firstname: string;
  lastname: string;
  birthday: string;
  age: number;
  weight?: null;
  height: number;
  img: string;
  country: CountryProps;

  percetage?: number;
}

type CountryProps = {
  country_id: number;
  name: string;
  country_code: string;
  continent: string;
}

export type SelectablePlayerProps = {
  isSelected: boolean;
}

export type HighlightedPlayerProps = { player: PlayerProps; percetage: number }

export default PlayerProps;
