import styled from 'styled-components';

export const StyledGameButton = styled.button`
  font-size: 1.7rem;
  font-family: 'Lato', sans-serif;
  border-color: white;
  width: 80px;
  height: 80px;
  border-radius: 18px;
  overflow: hidden;
  padding: 0.55rem;
  display: flex;
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
  background: #ecf0f3;
  cursor: pointer;
`;

export const StyledGameSpacer = styled.div`
  margin: 20px;
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
  background-color: #ff7d2c;
  color: white;
`;
