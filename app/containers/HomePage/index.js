import React, { useState } from 'react';
import { StyledFormular } from '../../components/Formular';
import { H2 } from '../../components/H2';
import { H4 } from '../../components/H4';
import { H5 } from '../../components/H5';
import { H6 } from '../../components/H6';
import { ScrabbleList } from '../../components/Liste';

export default function HomePage() {
  const [myTextInput, setMyTextInput] = useState('');
  const [score, setScore] = useState(0);
  const data = [{}];
  const [scoreSum, setScoreSum] = useState(0);
  const [testData, setTestData] = useState(data);
  const [counter, setCounter] = useState(1);
  const letterValues = {
    1: ['a', 'e', 'i', 'o', 'u'],
    2: ['d', 'f', 'h', 'l', 'm', 's'],
    3: ['b', 'c', 'g', 'n'],
    4: ['j', 'p', 't', 'w'],
    5: ['k', 'v'],
    6: ['q', 'y', 'z'],
    8: ['x'],
  };

  const handleTextInput = liveInput => {
    console.info(liveInput);
    const reg = new RegExp(/^[A-Za-z]+$/g).test(liveInput);
    setMyTextInput(liveInput);
    if (!reg) {
      alert('Bitte gib keine Zahlen oder Sonderzeichen ein!');
      setMyTextInput('');
      return;
    }
    console.log(`Typed -> ${liveInput}`);
    setScore(scrabbleScore());
  };

  // TODO: rewriting the code for better understanding
  const lettersToScore = letter => {
    const keys = Object.keys(letterValues);
    const values = Object.values(letterValues);

    for (let i = 0; i < keys.length; i += 1) {
      if (
        keys.indexOf(
          values[i].indexOf(letter) !== -1 ? keys[i].toString() : '-1',
        ) !== -1
      ) {
        return parseInt(keys[i], 10);
      }
    }
    return -1;
  };

  const scrabbleScore = () => {
    const word = myTextInput;
    let sum = 0;
    word
      .toLowerCase()
      .split('')
      .forEach(buchstabe => {
        sum += lettersToScore(buchstabe);
      });
    console.log('Die Punktzahl deines eingegeben Wortes beträgt: ', sum);
    return sum;
  };

  const displayAllScores = () => {
    setCounter(counter + 1);
    setTestData(prevData => [
      ...prevData,
      {
        id: counter,
        wort: myTextInput,
        punktezahl: score,
      },
    ]);
    console.info(testData);
    setScoreSum(score + scoreSum);
  };

  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-center">
        <H2>Scrabble Estimator</H2>
      </div>
      <div className="d-flex justify-content-center">
        <H6>Erfahre deine Punktzahl!</H6>
      </div>
      <div className="d-flex justify-content-center">
        <StyledFormular
          value={myTextInput}
          onChange={handleTextInput}
          onClick={displayAllScores}
        />
      </div>
      <div className="d-flex justify-content-center">
        <H5>
          Der Scrabble-Score von {myTextInput} beträgt: {score}
        </H5>
      </div>
      <div className="d-flex justify-content-center">
        <ScrabbleList testData={testData} />
      </div>
      <div className="d-flex justify-content-center">
        <H4>Dein GesamtScore beträgt: {scoreSum} </H4>
      </div>
    </div>
  );
}
