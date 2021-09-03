/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from '../../components/Button';
import { Formular } from '../../components/Formular';
import { H2 } from '../../components/H2';
import { H5 } from '../../components/H5';
import { H6 } from '../../components/H6';

export default function HomePage() {
  // two variables and inital value of an empty string
  const [myValue, setValue] = useState('');
  const [errors, setErrors] = useState('');
  const [score, setScore] = useState(0);

  const valueRef = useRef(''); // creating a refernce for TextField Component

  // Funktion zum Auslesen der Eingabe im Textfeld
  // checking input with regex

  const handleChange = e => {
    const reg = new RegExp(/^[A-Za-z]+$/g).test(e.target.value);
    setValue(e.target.value);
    if (!reg) {
      // alert("Do not enter any type of number!")
      setErrors({ myValue: 'Bitte nur Buchstaben eingeben' });
      setValue('');
      return;
    }
    console.log(`Typed -> ${e.target.value}`);
    setScore(scrabbleScore());
  };

  const scrabbleScore = () => {
    let word = valueRef.current.value;

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

  return (
    <Container>
      <Row>
        <Col />
        <Col md="auto">
          <H2>Scrabble Estimator</H2>
        </Col>
        <Col />
      </Row>
      <Row>
        <Col />
        <Col md="auto">
          <H6>Erfahren deine Punktzahl!</H6>
        </Col>
        <Col />
      </Row>
      <Row>
        <Col />
        <Col md="auto">
          <Formular>
            <input
              type="text"
              label="Scrabble Wort"
              value={myValue}
              // inputRef={valueRef} // connecting inputRef property of TextField to the valueRef
              onChange={handleChange}
              error={Boolean(errors.myValue)}
              // helperText={errors.myValue}
            />
            <br />
            <Button
              primary
              type="submit"
              value="Score berechnen"
              onClick={scrabbleScore}
            >
              Score berechnen
            </Button>
          </Formular>
        </Col>
        <Col />
      </Row>
      <Row>
        <Col />
        <Col md="auto">
          <H5>
            Der Scrabble-Score von {myValue} beträgt: {score}
          </H5>
        </Col>
        <Col />
      </Row>
    </Container>
  );
}
