import React, { useState, useEffect } from 'react';
import { AccountSwitcher } from '../../components/AccountSwitcher';
//import { Field } from '../../components/Field/styledField';
import { StyledFormular } from '../../components/Formular';
import { H2 } from '../../components/H2';
import { H4 } from '../../components/H4';
import { H5 } from '../../components/H5';
import { H6 } from '../../components/H6';
import { ScrabbleList } from '../../components/Liste';
import { useSelectScores, useSelectUsers } from '../Redux/hooks';

export default function HomePage() {
  const [scrabbleWord, setScrabbleWord] = useState('');
  const [scrabbleWordScore, setScrabbleWordScore] = useState(0);
  const {
    setScrabbleScoreData,
    currentPlayer,
    currentScoreList,
  } = useSelectScores();
  const { fetchUser, allUsers } = useSelectUsers();
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
    }
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
    scrabbleWord
      .toLowerCase()
      .split('')
      .forEach(letter => {
        sum += letterToScore(letter);
      });
    console.log('Die Punktzahl deines eingegeben Wortes beträgt: ', sum);
    return sum;
  };

  const addScrabbleDataToList = () => {
    setScrabbleScoreData(
      scrabbleWord,
      calculateScrabbleScore(),
      currentPlayer.playerID,
    );
  };

  useEffect(() => {
    fetchUser();
  }, []);

  console.log('API CALL: ', allUsers);
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
      <div className="d-flex justify-content-around">
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
      <ScrabbleList />
      <div className="d-flex justify-content-center">
        <H4>
          {currentPlayer.playerName} dein Gesamt-Score beträgt:{' '}
          {currentScoreList
            .filter(
              currentScoreListFiltered =>
                currentScoreListFiltered.playerID === currentPlayer.playerID,
            )
            .reduce(
              (acc, currentScoreListEntity) =>
                acc + currentScoreListEntity.score,
              0,
            )}
        </H4>
      </div>
    </div>
  );
}
