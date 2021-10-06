import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelectScores, useSelectUsers } from '../../containers/Redux/hooks';
import {
  Container,
  ContainerForHighscoreTable,
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
            {currentScoreList
              .filter(
                currentScoreListFiltered =>
                  currentScoreListFiltered.playerID === currentPlayer.playerID,
              )
              .map(ScoreListEntity => (
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


export const HighScoreList = () => {
  const { currentScoreList } = useSelectScores();
  const { round } = useSelectUsers();
  console.log(round.roundCounter);
  return (
    <ContainerForHighscoreTable>
      <Scrollable>
        <StyledTable>
          <StyledThead>
            <tr>
              <th>Spielrunde</th>
              <th>Gesamtpunktestand</th>
            </tr>
          </StyledThead>
          <StyledTbody>
            <StyledTrow key={uuidv4()}>
              <td>{round.roundCounter}</td>
              <td>
                {currentScoreList
                  .reduce(
                    (acc, currentScoreListEntity) =>
                      acc + currentScoreListEntity.score,
                    0,
                  )}
              </td>
            </StyledTrow>
          </StyledTbody>
        </StyledTable>
      </Scrollable>
    </ContainerForHighscoreTable>
  );
};
