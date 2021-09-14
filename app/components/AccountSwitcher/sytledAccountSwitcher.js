import styled from 'styled-components';

export const StyledAccountButton = styled.div`
  font-size: 1.7rem;
  font-family: 'Lato', sans-serif;
  width: 80px;
  height: 80px;
  border-radius: 18px;
  overflow: hidden;
  padding: 0.55rem;
  margin-left: 25px;
  margin-top: 10px;
  display: flex;
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
  background: #ecf0f3;
  cursor: pointer;
`;

export const StyledAccountButtonInnerArea = styled.span`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  overflow: hidden;
  padding: 0.27rem;
  color: #555;
  box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;
`;

export const StyledAccountButtonInnerIcon = styled.strong`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  overflow: hidden;
  background-color: #24cfaa;
  color: white;
`;
export const StyledSpacer = styled.div`
  margin-right: 90px;
`;
