import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import LocationCard from './components/LocationCard';
import SearchForm from './components/SearchForm';
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';

export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <WelcomePage />
      <Route path='./components/SearchForm' component={SearchForm}  />
      <Route path='./components/LocationCard' component={LocationCard}  />
      <Route path='./components/CharacterList' component={CharacterList}  />
      <Route path='./components/CharacterCard' component={CharacterCard}  />
    </main>
  );
}
