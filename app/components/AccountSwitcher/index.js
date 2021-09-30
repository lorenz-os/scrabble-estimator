import React from 'react';
import { useSelectScores, useSelectUsers } from '../../containers/Redux/hooks';
import {
  StyledAccountButton,
  StyledAccountButtonInnerArea,
  StyledAccountButtonInnerIconPlayer1,
  StyledAccountButtonInnerIconPlayer2,
  StyledAccountButtonInnerIconPlayer3,
  StyledParagraph,
  StyledSpacer,
} from './styledAccountSwitcher';

export const AccountSwitcher = () => {
  const { changePlayers } = useSelectScores();
  const { allUsers } = useSelectUsers();
  console.log('ALL USERS: ', allUsers);
  // const nameOfPlayerOne = allUsers.userArray[0].userName;
  // console.log("Name des Spielers: ", nameOfPlayerOne);
  console.log('FIRST USER: ', allUsers.userArray[0]);
  return (
    <StyledSpacer className="d-flex flex-row">
      <div className="d-flex flex-column justify-content-center align-self-center">
        <StyledAccountButton
          onClick={() =>
            changePlayers(1, true, allUsers.userArray[0].userName, '#24cfaa')
          }
        >
          <StyledAccountButtonInnerArea>
            <StyledAccountButtonInnerIconPlayer1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </StyledAccountButtonInnerIconPlayer1>
          </StyledAccountButtonInnerArea>
        </StyledAccountButton>
        <StyledParagraph>{allUsers.userArray[0].userName}</StyledParagraph>
      </div>
      <div className="d-flex flex-column justify-content-center align-self-center">
        <StyledAccountButton
          onClick={() =>
            changePlayers(2, true, allUsers.userArray[1].userName, '#F82B4B')
          }
        >
          <StyledAccountButtonInnerArea>
            <StyledAccountButtonInnerIconPlayer2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </StyledAccountButtonInnerIconPlayer2>
          </StyledAccountButtonInnerArea>
        </StyledAccountButton>
        <StyledParagraph>{allUsers.userArray[1].userName}</StyledParagraph>
      </div>
      <div className="d-flex flex-column justify-content-center align-self-center">
        <StyledAccountButton
          onClick={() =>
            changePlayers(3, true, allUsers.userArray[2].userName, '#FFB02C')
          }
        >
          <StyledAccountButtonInnerArea>
            <StyledAccountButtonInnerIconPlayer3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </StyledAccountButtonInnerIconPlayer3>
          </StyledAccountButtonInnerArea>
        </StyledAccountButton>
        <StyledParagraph>{allUsers.userArray[2].userName}</StyledParagraph>
      </div>
    </StyledSpacer>
  );
};
