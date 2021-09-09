import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { Formular } from './styledFormular';
import { Textfield } from '../Textfield';

export const StyledFormular = ({ onChange, onClick, value }) => {
  console.info(value);

  return (
    <Formular>
      <Textfield
        type="text"
        required="required"
        name="scrabbleWort"
        placeholder="Scrabble Wort"
        value={value}
        onChange={event => onChange(event.target.value)}
      />
      <br />
      <br />
      <Button type="button" value="Score berechnen" onClick={onClick}>
        Score speichern
      </Button>
    </Formular>
  );
};

StyledFormular.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.string,
};
