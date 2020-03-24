import React from "react";
import { Route } from "react-router-dom";
import CharacterList from './components/CharacterList';
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';

export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <Route exact path='/' component={WelcomePage}  />
      <Route path='/characters' component={CharacterList}  />
    </main>
  );
}
