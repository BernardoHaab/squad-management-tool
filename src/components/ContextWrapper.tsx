import React, { useEffect, useState } from "react";

import GlobalContext from "../context/GlobalContext";
import PlayerProps, { HighlightedPlayerProps } from "../types/usePlayerProps";
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
  const [mostPicked, setMostPicked] = useState<HighlightedPlayerProps | null>(
    null
  );
  const [lessPicked, setLessPicked] = useState<HighlightedPlayerProps | null>(
    null
  );

  useEffect(() => {
    updateHighlightedPlayers();
  }, [myTeams]);

  function updateHighlightedPlayers() {
    if (myTeams.length == 0) {
      return;
    }

    const allSelectedPlayers = myTeams
      .flatMap((team) => team.players.flatMap((formationLine) => formationLine))
      .filter((player) => player !== undefined);
    console.log(allSelectedPlayers);

    const playerIds = allSelectedPlayers.map((player) => player?.player_id);

    const occurrences = getOccurences(playerIds);
    const sortedPlayerIds = Object.entries(occurrences)
      .sort((a: any[], b: any[]) => {
        return a[1].length - b[1].length;
      })
      .flatMap((item) => item[0]);

    const mostOccurrence = {
      player: allSelectedPlayers.find(
        (player) => player?.player_id.toString() == sortedPlayerIds.at(-1)
      ),
      ocurrences:
        occurrences[sortedPlayerIds[sortedPlayerIds.length - 1]].length,
    };
    const lessOccurrence = {
      player: allSelectedPlayers.find(
        (player) => player?.player_id.toString() == sortedPlayerIds.at(0)
      ),
      ocurrences: occurrences[sortedPlayerIds[0]].length,
    };

    if (mostOccurrence.player && lessOccurrence.player) {
      setMostPicked({
        player: mostOccurrence.player,
        percetage: Math.round(
          (mostOccurrence.ocurrences * 100) / allSelectedPlayers.length
        ),
      });
      setLessPicked({
        player: lessOccurrence.player,
        percetage: Math.round(
          (lessOccurrence.ocurrences * 100) / allSelectedPlayers.length
        ),
      });
    }
  }

  function getOccurences(array: (number | undefined)[]) {
    var result = Object();

    array.forEach(function (item, id) {
      if (item !== undefined) {
        if (!result[item]) {
          result[item] = [id];
        } else {
          result[item].push(id);
        }
      }
    });

    return result;
  }

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
