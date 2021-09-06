import React, { ChangeEvent, useEffect, useState } from "react";

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

type CreateTeamProps = {
  editingTeam?: TeamProps;
};

const CreateTeam: React.FC<CreateTeamProps> = ({ editingTeam }) => {
  const players: PlayerProps[] = [
    { name: "Cristiano Ronaldo", age: 32, nacionality: "Portugal" },
    { name: "Ronaldo Fenomeno", age: 44, nacionality: "Brasil" },
    { name: "Ronaldinho Gaúcho", age: 41, nacionality: "Brasil" },
  ];
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

  const [searchedPlayers, setSearchedPlayers] = useState<PlayerProps[]>([]);
  const [team, setTeam] = useState<TeamProps>({
    name: "",
    website: "",
    teamType: "fantasy",
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
      players.filter((player) =>
        player.name.toLowerCase().includes(value.toLowerCase())
      )
    );
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

  useEffect(() => {
    if (editingTeam != undefined) {
      setTeam(editingTeam);
      return;
    }
  }, [editingTeam]);

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
          <form>
            <h3>TEAM INFORMATION</h3>
            <div className="inputs-container">
              <InputWrapper textLabel="Team name" labelFor="name">
                <input
                  name="name"
                  id="name"
                  placeholder="Insert team name"
                  type="text"
                  onChange={handleInputChange}
                />
              </InputWrapper>
              <InputWrapper textLabel="Team website" labelFor="website">
                <input
                  placeholder="http://myteam.com"
                  type="text"
                  id="website"
                  name="website"
                  onChange={handleInputChange}
                />
              </InputWrapper>

              <InputWrapper textLabel="Description" labelFor="description">
                <textarea
                  id="description"
                  name="description"
                  onChange={handleInputChange}
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
              <InputWrapper textLabel="Formation">
                <FormationField selectedFormation={formations[0].rows} />
              </InputWrapper>
              <InputWrapper textLabel="Search Players">
                <input onChange={handleSearchChange} type="text" />

                <ul>
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
          </form>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default CreateTeam;
