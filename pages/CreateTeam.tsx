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
import { uuid } from "uuidv4";

import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Card from "../src/components/Card";
import RadioInput from "../src/components/RadioInput";
import InputWrapper from "../src/components/InputWrapper";
import TagsBox from "../src/components/TagsBox";

import PlayerProps from "../src/types/usePlayerProps";
import PlayerItem from "../src/components/PlayerItem";
import FormationField from "../src/components/FormationField";
import TeamProps from "../src/types/useTeamProps";
import GlobalContext from "../src/context/GlobalContext";

type CreateTeamProps = {
  players: PlayerProps[];
};

const CreateTeam: React.FC<CreateTeamProps> = ({ players }) => {
  // const players: PlayerProps[] = [
  //   { name: "Cristiano Ronaldo", age: 32, nacionality: "Portugal" },
  //   { name: "Ronaldo Fenomeno", age: 44, nacionality: "Brasil" },
  //   { name: "Ronaldinho Gaúcho", age: 41, nacionality: "Brasil" },
  // ];
  const formations = [
    {
      name: "3-4-3",
      rows: [3, 5, 3],
    },
    {
      name: "3-2-2-3",
      rows: [3, 2, 2, 3],
    },
  ];

  const router = useRouter();
  const { myTeams, setMyTeams } = useContext(GlobalContext);
  const [searchedPlayers, setSearchedPlayers] = useState<PlayerProps[]>([]);
  const [team, setTeam] = useState<TeamProps>({
    name: "",
    website: "",
    teamType: "fantasy",
    avgAge: 0,
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
      players.filter(
        (player) =>
          player.firstname.toLowerCase().includes(value.toLowerCase()) ||
          player.lastname.toLowerCase().includes(value.toLowerCase())
      )
    );
  }

  function handleOnSubmit(e: FormEvent) {
    e.preventDefault();

    hasRequidFields() && saveEditedTeam();

    router.push("/");
  }

  function handleEnterClick(e: KeyboardEvent<HTMLFormElement>) {
    e.key === "Enter" && e.preventDefault();
  }

  function getUpdatedMyTeams() {
    return myTeams.map((myTeam) => (myTeam.id === team.id ? team : myTeam));
  }

  function hasRequidFields() {
    return team.name.trim().length > 0;
  }

  function saveEditedTeam() {
    if (team.id) {
      setMyTeams(getUpdatedMyTeams());
    } else {
      setMyTeams([...myTeams, { ...team, id: uuid() }]);
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

  function addPlayer(player: PlayerProps) {
    const currentPlayers =
      team.players?.length !== undefined ? team.players : [];
    setTeam({ ...team, players: [...currentPlayers, player] });
  }

  function getTeam(teamId: string | string[]) {
    return myTeams.find((team) => team.id === teamId);
  }

  useEffect(() => {
    const { editingTeamId } = router.query;
    console.log(editingTeamId);

    if (editingTeamId != undefined) {
      const editingTeam = getTeam(editingTeamId);

      setTeam(editingTeam !== undefined ? editingTeam : team);
    }
  }, [router.query]);

  useEffect(() => {
    if (team.players?.length) {
      const ageSum = team.players?.reduce((acc, player) => acc + player.age, 0);
      setTeam({ ...team, avgAge: ageSum / team.players?.length });
    }
  }, [team.players]);

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
                  required
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
                  required
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
                      required
                    />
                    <RadioInput
                      checked={team.teamType == "fantasy"}
                      changeEvent={handleInputChange}
                      textLabel="Fantasy"
                      inputValue="fantasy"
                      required
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
              <InputWrapper textLabel="Formation">
                <FormationField selectedFormation={formations[0].rows} />
              </InputWrapper>
              <InputWrapper
                customClass="players-container"
                textLabel="Search Players"
              >
                <input onChange={handleSearchChange} type="text" />

                <ul className="players-list">
                  {searchedPlayers.map((player, id) => (
                    <PlayerItem
                      addPlayer={addPlayer}
                      player={player}
                      key={id}
                    />
                  ))}
                </ul>
              </InputWrapper>
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
  console.log("ssa");

  const res = await fetch(
    `https://app.sportdataapi.com/api/v1/soccer/players?apikey=${process.env.API_KEY}&country_id=25`
  );

  const resJson = await res.json();

  const players = resJson.data;

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
