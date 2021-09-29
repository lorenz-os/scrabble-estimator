import React from 'react';
import {
  StyledAccountButton,
  StyledSpacer,
  StyledAccountButtonInnerArea,
} from '../AccountSwitcher/styledAccountSwitcher';
import { StyledAccountButtonInnerIcon } from './styledPlayButton';

export const PlayButton = () => (
  <StyledSpacer className="d-flex flex-row">
    <div className="d-flex flex-column justify-content-center align-self-center">
      <StyledAccountButton onClick={() => console.log('Button pressed!')}>
        <StyledAccountButtonInnerArea>
          <StyledAccountButtonInnerIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-play-fill"
              viewBox="0 0 16 16"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
            </svg>
          </StyledAccountButtonInnerIcon>
        </StyledAccountButtonInnerArea>
      </StyledAccountButton>
    </div>
  </StyledSpacer>
);

export const MoreButton = () => (
  <StyledSpacer className="d-flex flex-row">
    <div className="d-flex flex-column justify-content-center align-self-center">
      <StyledAccountButton onClick={() => console.log('Table will be shown')}>
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
      </StyledAccountButton>
    </div>
  </StyledSpacer>
);
