import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelectScores } from '../../containers/Redux/hooks';
import {
  Container,
  Scrollable,
  StyledTable,
  StyledTbody,
  StyledThead,
  StyledTrow,
} from './styledTable';

export const ScrabbleList = () => {
  const { currentScoreList, currentPlayer } = useSelectScores();
  const dynamicHeaderStyle = {
    background: currentPlayer.playerColor,
  };
  return (
    <Container>
      <Scrollable>
        <StyledTable>
          <StyledThead style={dynamicHeaderStyle}>
            <tr>
              <th>#</th>
              <th>Scrabble Wort</th>
              <th>Scrabble Score</th>
            </tr>
          </StyledThead>
          <StyledTbody>
            {currentScoreList.map(ScoreListEntity => (
              <StyledTrow key={uuidv4()}>
                <th>{ScoreListEntity.id}</th>
                <td>{ScoreListEntity.word}</td>
                <td>{ScoreListEntity.score}</td>
              </StyledTrow>
            ))}
          </StyledTbody>
        </StyledTable>
      </Scrollable>
    </Container>
  );
};
