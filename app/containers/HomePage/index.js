import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { AccountSwitcher } from '../../components/AccountSwitcher';
import { StyledFormular } from '../../components/Formular';
import { H2 } from '../../components/H2';
import { H4 } from '../../components/H4';
import { H5 } from '../../components/H5';
import { H6 } from '../../components/H6';
import { ScrabbleList } from '../../components/Liste';
import { useSelectScores } from '../Redux/hooks';

export default function HomePage() {
  const [scrabbleWord, setScrabbleWord] = useState('');
  const [scrabbleWordScore, setScrabbleWordScore] = useState(0);
  // const [totalScrabbleScore, setTotalScrabbleScore] = useState(0);
  const {
    setScrabbleScoreData,
    getTotalPlayerScrabbleScore,
    currentPlayer,
  } = useSelectScores();
  const letterValues = {
    1: ['a', 'e', 'i', 'o', 'u'],
    2: ['d', 'f', 'h', 'l', 'm', 's'],
    3: ['b', 'c', 'g', 'n'],
    4: ['j', 'p', 't', 'w'],
    5: ['k', 'v'],
    6: ['q', 'y', 'z'],
    8: ['x'],
  };

  const handleTextfieldInput = liveInput => {
    console.log('Current liveInput: ', liveInput);
    const reg = new RegExp(/^[A-Za-z]+$/g).test(liveInput);
    setScrabbleWord(liveInput);
    if (!reg) {
      alert('Bitte gib keine Zahlen oder Sonderzeichen ein!');
      setScrabbleWord('');
      return;
    }
    console.log('Typed -> ', liveInput);
  };

  useEffect(() => {
    setScrabbleWordScore(calculateScrabbleScore());
  }, [scrabbleWord]); // aktualsiert nach jedem Render -> jede Veränderung von ScrabbleWord führt zur Neuberechnung des Scores!

  const letterToScore = letter => {
    const keys = Object.keys(letterValues);
    const values = Object.values(letterValues);
    for (let i = 0; i < keys.length; i += 1) {
      let keyValue = 0;
      if (values[i].indexOf(letter) !== -1) {
        keyValue = keys[i];
      } else {
        keyValue = -1;
      }
      if (keys.indexOf(keyValue) !== -1) {
        return parseInt(keys[i], 10);
      }
    }
    return -1;
  };

  const calculateScrabbleScore = () => {
    let sum = 0;
    console.log('Wort bei aufruf von calculateScrabbleScore', scrabbleWord);
    scrabbleWord
      .toLowerCase()
      .split('')
      .forEach(letter => {
        console.log('Aktueller Buchstabe aus der forEach:', letter);
        sum += letterToScore(letter);
      });
    console.log('Die Punktzahl deines eingegeben Wortes beträgt: ', sum);
    return sum;
  };

  const addScrabbleDataToList = () => {
    setScrabbleScoreData(scrabbleWord, calculateScrabbleScore());
    // setTotalScrabbleScore(scrabbleWordScore + totalScrabbleScore);
    getTotalPlayerScrabbleScore(
      currentPlayer.playerID,
      currentPlayer.totalPlayerScore + scrabbleWordScore,
    );
  };

  console.log('Redux: ', useSelectScores());
  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-end">
        <AccountSwitcher />
      </div>
      <div className="d-flex justify-content-center">
        <H2>Scrabble Estimator</H2>
      </div>
      <div className="d-flex justify-content-center">
        <H6>Hallo {currentPlayer.playerName} erfahre deine Punktzahl!</H6>
      </div>
      <div className="d-flex justify-content-center">
        <StyledFormular
          value={scrabbleWord}
          onChange={handleTextfieldInput}
          onClick={addScrabbleDataToList}
        />
      </div>
      <div className="d-flex justify-content-center">
        <H5>
          Der Scrabble-Score von {scrabbleWord} beträgt: {scrabbleWordScore}
        </H5>
      </div>
      <Carousel
        showThumbs={false}
        useKeyboardArrows
        showStatus={false}
        showArrows={false}
      >
        <div>
          <ScrabbleList />
        </div>
        <div>
          <ScrabbleList />
        </div>
        <div>
          <ScrabbleList />
        </div>
      </Carousel>
      <div className="d-flex justify-content-center">
        <H4>
          {currentPlayer.playerName} dein Gesamt-Score beträgt:{' '}
          {currentPlayer.totalPlayerScore}{' '}
        </H4>
      </div>
    </div>
  );
}
