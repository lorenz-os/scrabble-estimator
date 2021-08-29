/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

// Begrüßungstext
function Welcome() {
  return <h1>Hallo Lorenzo und herzlich willkommen zum Scrabble Estimator!</h1>;
}

// Scrabble-Estimator
function Texteingabe() {
  return (
    <form id="texteingabe">
      Scrabble Wort: <input type="text" name="scrabbleWord" />
      <br />
      <br />
      <input type="button" onClick="scrabbleScore()" value="Score berechnen" />
    </form>
  );
}

export default function HomePage() {
  return (
    <div>
      <Welcome />
      <Texteingabe />
    </div>
  );
}
