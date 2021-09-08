import React, {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { v4 } from "uuid";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Card from "../src/components/Card";
import RadioInput from "../src/components/RadioInput";
import InputWrapper from "../src/components/InputWrapper";
import TagsBox from "../src/components/TagsBox";

import PlayerProps, {
  SelectablePlayerProps,
} from "../src/types/usePlayerProps";
import PlayerItem from "../src/components/PlayerItem";
import FormationField from "../src/components/FormationField";
import TeamProps from "../src/types/useTeamProps";
import GlobalContext from "../src/context/GlobalContext";

type CreateTeamProps = {
  players: PlayerProps[];
};

const CreateTeam: React.FC<CreateTeamProps> = ({ players }) => {
  const formations = [
    {
      name: "3-5-3",
      rows: [3, 5, 3, 1],
    },
    {
      name: "3-2-2-3",
      rows: [3, 2, 2, 3, 1],
    },
  ];

  const router = useRouter();
  const { myTeams, setMyTeams } = useContext(GlobalContext);
  const [searchedPlayers, setSearchedPlayers] = useState<
    (PlayerProps & SelectablePlayerProps)[]
  >([]);
  const [selectedFormation, setSelectedFormation] = useState(formations[0]);
  const [team, setTeam] = useState<TeamProps>({
    name: "",
    website: "",
    teamType: "fantasy",
    avgAge: 0,
    players: getPlayersByFormation(),
  });

  function handleInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setTeam({ ...team, [name]: value });
  }

  function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    if (!value) {
      setSearchedPlayers([]);
      return;
    }

    setSearchedPlayers(
      players
        .filter(
          (player) =>
            player.firstname.toLowerCase().startsWith(value.toLowerCase()) ||
            player.lastname.toLowerCase().startsWith(value.toLowerCase())
        )
        .map((player) => ({ ...player, isSelected: false }))
    );
  }

  function handleOnSubmit(e: FormEvent) {
    e.preventDefault();

    console.log(team);
    console.log(team);

    if (hasRequidFields()) {
      console.log("vai");

      saveEditedTeam();

      router.push("/");
    } else {
      alert("Please complete your team!");
    }
  }

  function handleEnterClick(e: KeyboardEvent<HTMLFormElement>) {
    e.key === "Enter" && e.preventDefault();
  }

  function getUpdatedMyTeams() {
    return myTeams.map((myTeam) => (myTeam.id === team.id ? team : myTeam));
  }

  function hasRequidFields() {
    const hasName = team.name.trim().length > 0;
    const isWebsite =
      /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/.test(
        team.website
      );
    const hassAllPlayers = !team.players.some((el) => el.includes(undefined));
    return hasName && isWebsite && hassAllPlayers;
  }

  function saveEditedTeam() {
    console.log(team);
    console.log(team.id);

    if (team.id) {
      console.log("team.id");
      console.log(team);

      setMyTeams(getUpdatedMyTeams());
    } else {
      console.log("else");
      console.log(team);

      setMyTeams([...myTeams, { ...team, id: v4() }]);
    }
  }

  function addTag(text: string) {
    const currentTags = team.tags?.length !== undefined ? team.tags : [];
    setTeam({ ...team, tags: [...currentTags, text] });
  }

  function removeTag(index: number) {
    if (team.tags?.length !== undefined && team.tags?.length > 0) {
      setTeam({ ...team, tags: team.tags.filter((value, id) => id !== index) });
    }
  }

  function addPlayer(
    playerToAdd: PlayerProps,
    formationLine: number,
    formationColumn: number
  ) {
    const currentPlayers = team.players;
    currentPlayers[formationLine][formationColumn] = playerToAdd;
    console.log("addPlayer");
    console.log(team);
    const currentTeam = team;
    const updatedTeam = { ...currentTeam, players: currentPlayers };
    console.log(updatedTeam);

    setTeam(updatedTeam);
  }

  function getTeam(teamId: string | string[]) {
    return myTeams.find((team) => team.id === teamId);
  }

  function getPlayersByFormation() {
    return Array(selectedFormation.rows.length)
      .fill(0)
      .map((_, id) =>
        Array<PlayerProps | undefined>(selectedFormation.rows[id]).fill(
          undefined
        )
      );
  }

  useEffect(() => {
    setTeam({ ...team, players: getPlayersByFormation() });
  }, [selectedFormation]);

  useEffect(() => {
    const { editingTeamId } = router.query;

    if (editingTeamId != undefined) {
      const editingTeam = getTeam(editingTeamId);

      setTeam(editingTeam !== undefined ? editingTeam : team);
    }
  }, [router.query]);

  useEffect(() => {
    const filteredPlayers = Array();
    team.players.forEach((formationLine) => {
      const filteredLine = formationLine.filter(
        (player) => player != undefined
      );
      filteredPlayers.push(...filteredLine);
    });

    const ageSum = filteredPlayers.reduce((acc, player) => acc + player.age, 0);
    setTeam({ ...team, avgAge: ageSum / team.players?.length });
  }, [team.players]);

  useEffect(() => {
    console.log(team);
  }, [team]);

  return (
    <div className="create-team">
      <Header userName="Bernardo Haab" />
      <main>
        <Card title="Create your team">
          <form onKeyDown={handleEnterClick} onSubmit={handleOnSubmit}>
            <h3>TEAM INFORMATION</h3>
            <div className="inputs-container">
              <InputWrapper textLabel="Team name" labelFor="name">
                <input
                  name="name"
                  id="name"
                  placeholder="Insert team name"
                  type="text"
                  onChange={handleInputChange}
                  value={team.name}
                />
              </InputWrapper>
              <InputWrapper textLabel="Team website" labelFor="website">
                <input
                  placeholder="http://myteam.com"
                  id="website"
                  name="website"
                  type="url"
                  onChange={handleInputChange}
                  value={team.website}
                />
              </InputWrapper>

              <InputWrapper textLabel="Description" labelFor="description">
                <textarea
                  id="description"
                  name="description"
                  onChange={handleInputChange}
                  value={team.description}
                />
              </InputWrapper>

              <div className="dual-input">
                <InputWrapper textLabel="Team type">
                  <div className="radio-container">
                    <RadioInput
                      checked={team.teamType == "real"}
                      changeEvent={handleInputChange}
                      textLabel="Real"
                      inputValue="real"
                    />
                    <RadioInput
                      checked={team.teamType == "fantasy"}
                      changeEvent={handleInputChange}
                      textLabel="Fantasy"
                      inputValue="fantasy"
                    />
                  </div>
                </InputWrapper>

                <InputWrapper customClass="tags-wrapper" textLabel="Tags">
                  <TagsBox
                    tags={team.tags}
                    addTag={addTag}
                    removeTag={removeTag}
                  />
                </InputWrapper>
              </div>
            </div>
            <h3>CONFIGURE SQUAD</h3>
            <div className="inputs-container">
              <DndProvider backend={HTML5Backend}>
                <InputWrapper textLabel="Formation">
                  <FormationField
                    addPlayer={addPlayer}
                    playersPositions={team.players}
                  />
                </InputWrapper>
                <InputWrapper
                  customClass="players-container"
                  textLabel="Search Players"
                >
                  <input onChange={handleSearchChange} type="text" />

                  <ul className="players-list">
                    {searchedPlayers.length > 0 ? (
                      searchedPlayers.map((player) => (
                        <PlayerItem player={player} key={player.player_id} />
                      ))
                    ) : (
                      <div className="placeholder-wrapper">
                        Search for players, Chose and Drag them to the desired
                        position!
                      </div>
                    )}
                  </ul>
                </InputWrapper>
              </DndProvider>
            </div>
            <button className="save-button" type="submit">
              SAVE
            </button>
          </form>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `https://app.sportdataapi.com/api/v1/soccer/players?apikey=${process.env.API_KEY}&country_id=25`
  );

  const resJson = await res.json();

  const players = resJson.data.slice(0, 150);

  if (!players) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      players,
    },
  };
};

export default CreateTeam;
