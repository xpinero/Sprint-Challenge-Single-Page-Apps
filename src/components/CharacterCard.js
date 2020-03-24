import React from "react";

export default function CharacterCard(props) {
  console.log(props)
  const character = props.character
  return <div>{character.name}</div>;
}
