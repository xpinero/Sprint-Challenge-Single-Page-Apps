import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/documentation')
        .then(response => {
          console.log(response);
          setCharacter(response.data);
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
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
