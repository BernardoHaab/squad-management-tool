import PlayerProps, { SelectablePlayerProps } from "./usePlayerProps"

export const DraggTypes = {
  SEARCHED_PLAYERS: 'Player',
  SELECTED_PLAYERS: 'SelectePlayers'
}

export type ItemProps = {
  player: PlayerProps
  origin: 'SearchList' | 'FootbalField'
}
