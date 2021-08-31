/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import '@fontsource/roboto';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import { TextField, makeStyles, Button, Typography } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';

// Funktion zum Stylen der Material UI Komponenten
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

/* Funktion, welche den Input des Textfeldes checked. 
Ist der Wert korrekt (nur Buchstaben, keine Zahlen), dann gibt diese Funktion den Scrabble-Score aus. 
Ist die Eingabe fehlerhaft, dann gibt es eine Fehlermeldung im Alert-Fenster. 
*/

export default function HomePage() {
  // Style wird anschließend angewendet
  const classes = useStyles();
  // two variables and inital value of an empty string
  const [myValue, setValue] = useState('');
  const [errors, setErrors] = useState('');

  // Funktion zum Auslesen der Eingabe im Textfeld
  // checking input with regex
  const handleChange = e => {
    const reg = new RegExp(/^[A-Za-z]+$/g).test(e.target.value);
    if (!reg) {
      // alert("Do not enter any type of number!")
      setErrors({ myValue: 'Bitte nur Buchstaben eingeben' });
    }
    console.log(`Typed -> ${e.target.value}`);
    setValue(e.target.value);
  };

  /*
  const scrabbleScore = word => {
    // scrabble letter values
    const letterValues = {
      a: 1,
      b: 3,
      c: 3,
      d: 2,
      e: 1,
      f: 2,
      g: 3,
      h: 2,
      i: 1,
      j: 4,
      k: 5,
      l: 2,
      m: 2,
      n: 3,
      o: 1,
      p: 4,
      q: 6,
      r: 4,
      s: 2,
      t: 4,
      u: 1,
      v: 5,
      w: 4,
      x: 8,
      y: 6,
      z: 6,
    };

    // calculate the score of all letters
    let sum = 0;
    let i;
    word = word.toLowerCase();

    for (i = 0; i < word.length; i += 1) {
      sum += letterValues[word[i]] || 0; // for unknown characters
    }

    // return the scrabbleScore of the word
    console.log('Die Punktzahl deines eingegeben Wortes beträgt: ', sum);
    return sum;
  };
  */

  return (
    <div align="center" className={classes.root}>
      {/*----------------------------------------------------------------------------*/}
      {/* Überschrift */}
      <br />
      <Typography variant="h2">Scrabble Estimator</Typography>
      <Typography variant="subtitle1">Erfahren deine Punktzahl!</Typography>
      <br />
      {/*----------------------------------------------------------------------------*/}
      {/* Texteingabe fuer die Berechnung des Scrabble-Score */}
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-secondary"
          label="Scrabble Wort"
          color="primary"
          value={myValue}
          required
          onChange={handleChange}
          error={Boolean(errors.myValue)}
          helperText={errors.myValue}
        />
        <br />
        <Button
          type="button"
          // onClick={scrabbleScore}
          value="Score berechnen"
          variant="contained"
          color="primary"
        >
          Score berechnen
        </Button>
      </form>
      {/* Ausgabe des Scores */}
      {/*----------------------------------------------------------------------------*/}
      <br />
      <Typography variant="h5">
        Der Scrabble-Score deines eingebene Wortes:
      </Typography>
    </div>
  );
}
