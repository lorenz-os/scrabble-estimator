import React from 'react';
import {
  StyledAccountButton,
  StyledAccountButtonInnerArea,
  StyledAccountButtonInnerIconPlayer1,
  StyledAccountButtonInnerIconPlayer2,
  StyledAccountButtonInnerIconPlayer3,
  StyledArrowButton,
  StyledArrowLeft,
  StyledArrowRight,
  StyledParagraph,
  StyledSpacer,
} from './sytledAccountSwitcher';

export const AccountSwitcher = () => (
  <StyledSpacer className="d-flex flex-row">
    <StyledArrowButton>
      <StyledParagraph>
        <StyledArrowLeft />
      </StyledParagraph>
    </StyledArrowButton>
    <div className="d-flex flex-column justify-content-center align-self-center">
      <StyledAccountButton>
        <StyledAccountButtonInnerArea>
          <StyledAccountButtonInnerIconPlayer1>
            LS
          </StyledAccountButtonInnerIconPlayer1>
        </StyledAccountButtonInnerArea>
      </StyledAccountButton>
      <StyledParagraph>Lorenzo</StyledParagraph>
    </div>
    <div className="d-flex flex-column justify-content-center align-self-center">
      <StyledAccountButton>
        <StyledAccountButtonInnerArea>
          <StyledAccountButtonInnerIconPlayer2>
            TW
          </StyledAccountButtonInnerIconPlayer2>
        </StyledAccountButtonInnerArea>
      </StyledAccountButton>
      <StyledParagraph>Tobi</StyledParagraph>
    </div>
    <div className="d-flex flex-column justify-content-center align-self-center">
      <StyledAccountButton>
        <StyledAccountButtonInnerArea>
          <StyledAccountButtonInnerIconPlayer3>
            CS
          </StyledAccountButtonInnerIconPlayer3>
        </StyledAccountButtonInnerArea>
      </StyledAccountButton>
      <StyledParagraph>Chris</StyledParagraph>
    </div>
    <StyledArrowButton>
      <StyledParagraph>
        <StyledArrowRight />
      </StyledParagraph>
    </StyledArrowButton>
  </StyledSpacer>
);
