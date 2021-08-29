/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import '@fontsource/roboto';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

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
function scrabbleScore() {
  alert('Button clicked');
}

export default function HomePage() {
  const classes = useStyles();

  return (
    <div align="center" className={classes.root}>
      {/*----------------------------------------------------------------------------*/}
      {/* Überschrift */}
      <br />
      <Typography variant="h2">Scrabble Estimator</Typography>
      <Typography variant="subtitle1">
        Erfahren deinen Scrabble-Score!
      </Typography>
      <br />
      {/*----------------------------------------------------------------------------*/}
      {/* Texteingabe fuer die Berechnung des Scrabble-Score */}
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-secondary"
          label="Scrabble Wort"
          color="primary"
        />
        <br />
        <Button
          type="button"
          onClick={scrabbleScore}
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
    </div>
  );
}
