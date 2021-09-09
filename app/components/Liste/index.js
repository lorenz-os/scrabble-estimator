import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import {
  StyledTable,
  StyledTbody,
  StyledThead,
  StyledTrow,
} from './styledTable';

export const ScrabbleList = ({ testData }) => (
  <StyledTable>
    <StyledThead>
      <tr>
        <th>#</th>
        <th>Scrabble Wort</th>
        <th>Scrabble Score</th>
      </tr>
    </StyledThead>
    <StyledTbody>
      {testData.map(test => (
        <StyledTrow key={uuidv4()}>
          <th>{test.id}</th>
          <td>{test.wort}</td>
          <td>{test.punktezahl}</td>
        </StyledTrow>
      ))}
    </StyledTbody>
  </StyledTable>
);

ScrabbleList.propTypes = {
  testData: PropTypes.array,
};
