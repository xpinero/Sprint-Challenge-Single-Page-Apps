import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function CharacterCard(props) {
  console.log(props);
  const character = props.character;
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src={character.image}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Name: {character.name}</CardTitle>
          <CardSubtitle>Species: {character.species}</CardSubtitle>
          <CardText>Gender: {character.gender}</CardText>
          <CardText>Status: {character.status}</CardText>
          <CardText>Origin: {character.origin.name}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
