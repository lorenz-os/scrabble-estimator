import React from 'react';
import { useSelectScores } from '../../containers/Redux/hooks';
import {
  StyledAccountButton,
  StyledAccountButtonInnerArea,
  StyledAccountButtonInnerIconPlayer1,
  StyledAccountButtonInnerIconPlayer2,
  StyledAccountButtonInnerIconPlayer3,
  StyledParagraph,
  StyledSpacer,
} from './sytledAccountSwitcher';

export const AccountSwitcher = () => {
  const { changePlayers } = useSelectScores();
  return (
    <StyledSpacer className="d-flex flex-row">
      <div className="d-flex flex-column justify-content-center align-self-center">
        <StyledAccountButton
          onClick={() => changePlayers(1, true, 'Lorenzo', '#24cfaa')}
        >
          <StyledAccountButtonInnerArea>
            <StyledAccountButtonInnerIconPlayer1>
              LS
            </StyledAccountButtonInnerIconPlayer1>
          </StyledAccountButtonInnerArea>
        </StyledAccountButton>
        <StyledParagraph>Lorenzo</StyledParagraph>
      </div>
      <div className="d-flex flex-column justify-content-center align-self-center">
        <StyledAccountButton
          onClick={() => changePlayers(2, true, 'Tobi', '#F82B4B')}
        >
          <StyledAccountButtonInnerArea>
            <StyledAccountButtonInnerIconPlayer2>
              TW
            </StyledAccountButtonInnerIconPlayer2>
          </StyledAccountButtonInnerArea>
        </StyledAccountButton>
        <StyledParagraph>Tobi</StyledParagraph>
      </div>
      <div className="d-flex flex-column justify-content-center align-self-center">
        <StyledAccountButton
          onClick={() => changePlayers(3, true, 'Chris', '#FFB02C')}
        >
          <StyledAccountButtonInnerArea>
            <StyledAccountButtonInnerIconPlayer3>
              CS
            </StyledAccountButtonInnerIconPlayer3>
          </StyledAccountButtonInnerArea>
        </StyledAccountButton>
        <StyledParagraph>Chris</StyledParagraph>
      </div>
    </StyledSpacer>
  );
};
