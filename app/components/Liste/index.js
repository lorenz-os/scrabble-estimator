import React from 'react';
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
  const { currentScoreList, currentPlayer } = useSelectScores();
  const { allUsers } = useSelectUsers();
  /* let highscoreForPlayer = currentScoreList
    .filter(
      currentScoreListFiltered =>
        currentScoreListFiltered.playerID === currentPlayer.playerID,
    ).filter(currentScoreListNameEntity => currentScoreListNameEntity.playerName === userName)
    .reduce(
      (acc, currentScoreListEntity) =>
        acc + currentScoreListEntity.score,
      0,
    );
    */
  return (
    <ContainerForHighscoreTable>
      <Scrollable>
        <StyledTable>
          <StyledThead>
            <tr>
              <th>Player Name</th>
              <th>Highscore</th>
            </tr>
          </StyledThead>
          <StyledTbody>
            {allUsers.userArray.map(user => {
              const { userName } = user; // destructuring
              console.log(userName);
              return (
                <StyledTrow key={uuidv4()}>
                  <td>{userName}</td>
                  <td>
                    {currentScoreList
                      .filter(
                        currentScoreListFiltered =>
                          currentScoreListFiltered.playerID ===
                          currentPlayer.playerID,
                      )
                      .reduce(
                        (acc, currentScoreListEntity) =>
                          acc + currentScoreListEntity.score,
                        0,
                      )}
                  </td>
                </StyledTrow>
              );
            })}
          </StyledTbody>
        </StyledTable>
      </Scrollable>
    </ContainerForHighscoreTable>
  );
};
