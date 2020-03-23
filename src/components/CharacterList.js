import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          console.log(response);
          setCharacters(response.data);
        })
        .catch(error => {
          console.log('Server Error', error);
        });
    };

    getCharacters();
     //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {characters.map((character) => <CharacterCard character={character}></CharacterCard>)}
    </section>
  );
}
