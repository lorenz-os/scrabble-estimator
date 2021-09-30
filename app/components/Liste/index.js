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
  const { currentScoreList, currentPlayer } = useSelectScores();
  return (
    <Container>
      <Scrollable>
        <StyledTable>
          <StyledThead>
            <tr>
              <th>Player Name</th>
              <th>Highscore</th>
            </tr>
          </StyledThead>
          <StyledTbody>
            {currentScoreList
              .filter(
                currentScoreListFiltered =>
                  currentScoreListFiltered.playerID === currentPlayer.playerID,
              )
              .map(() => (
                <StyledTrow key={uuidv4()}>
                  <td>{currentPlayer.playerName}</td>
                  <td>{currentScoreList
                    .filter(
                      currentScoreListFiltered =>
                        currentScoreListFiltered.playerID === currentPlayer.playerID,
                    )
                    .reduce(
                      (acc, currentScoreListEntity) =>
                        acc + currentScoreListEntity.score,
                      0,
                    )}</td>
                </StyledTrow>
              ))}
          </StyledTbody>
        </StyledTable>
      </Scrollable>
    </Container>);
};