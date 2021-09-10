import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import {
  Container,
  Scrollable,
  StyledTable,
  StyledTbody,
  StyledThead,
  StyledTrow,
} from './styledTable';

export const ScrabbleList = ({ scrabbleDataList }) => (
  <Container>
    <Scrollable>
      <StyledTable>
        <StyledThead>
          <tr>
            <th>#</th>
            <th>Scrabble Wort</th>
            <th>Scrabble Score</th>
          </tr>
        </StyledThead>
        <StyledTbody>
          {scrabbleDataList.map(scrabbleScoreEntry => (
            <StyledTrow key={uuidv4()}>
              <th>{scrabbleScoreEntry.id}</th>
              <td>{scrabbleScoreEntry.wort}</td>
              <td>{scrabbleScoreEntry.punktezahl}</td>
            </StyledTrow>
          ))}
        </StyledTbody>
      </StyledTable>
    </Scrollable>
  </Container>
);

ScrabbleList.propTypes = {
  scrabbleDataList: PropTypes.array,
};
