import React from 'react';
import {
  StyledAccountButton,
  StyledAccountButtonInnerArea,
  StyledAccountButtonInnerIcon,
  StyledSpacer,
} from './sytledAccountSwitcher';

export const AccountSwitcher = () => (
  <StyledSpacer className="d-flex flex-row">
    <StyledAccountButton>
      <StyledAccountButtonInnerArea>
        <StyledAccountButtonInnerIcon>LS</StyledAccountButtonInnerIcon>
      </StyledAccountButtonInnerArea>
    </StyledAccountButton>
    <StyledAccountButton>
      <StyledAccountButtonInnerArea>
        <StyledAccountButtonInnerIcon>TW</StyledAccountButtonInnerIcon>
      </StyledAccountButtonInnerArea>
    </StyledAccountButton>
    <StyledAccountButton>
      <StyledAccountButtonInnerArea>
        <StyledAccountButtonInnerIcon>CS</StyledAccountButtonInnerIcon>
      </StyledAccountButtonInnerArea>
    </StyledAccountButton>
  </StyledSpacer>
);
