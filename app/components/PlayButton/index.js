import React from 'react';
import { useSelectScores, useSelectUsers } from '../../containers/Redux/hooks';
import { StyledAccountButtonInnerArea } from '../AccountSwitcher/styledAccountSwitcher';
import {
  StyledAccountButtonInnerIcon,
  StyledGameButton,
  StyledGameSpacer,
} from './styledPlayButton';

export const PlayButton = () => {
  const { resetState } = useSelectScores();
  return (
    <StyledGameSpacer className="d-flex flex-row">
      <div className="d-flex flex-column justify-content-center align-self-center">
        <StyledGameButton onClick={resetState}>
          <StyledAccountButtonInnerArea>
            <StyledAccountButtonInnerIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-arrow-clockwise"
                viewBox="0 0 16 16"
              >
                <path
                  fill="evenodd"
                  d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                />
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
              </svg>
            </StyledAccountButtonInnerIcon>
          </StyledAccountButtonInnerArea>
        </StyledGameButton>
      </div>
    </StyledGameSpacer>
  );
};

export const MoreButton = () => {
  const { setHighscoreTable } = useSelectUsers();
  return (
    <StyledGameSpacer className="d-flex flex-row">
      <div className="d-flex flex-column justify-content-center align-self-center">
        <StyledGameButton onClick={setHighscoreTable}>
          <StyledAccountButtonInnerArea>
            <StyledAccountButtonInnerIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </StyledAccountButtonInnerIcon>
          </StyledAccountButtonInnerArea>
        </StyledGameButton>
      </div>
    </StyledGameSpacer>
  );
};
