import { useDispatch, useSelector } from 'react-redux';
import { addScrabbleDataAction, changePlayersAction } from './actions';

export const useSelectScores = () => {
  const dispatch = useDispatch();
  const currentScoreList = useSelector(state => state.reduxReducer.allScores);

  const currentPlayer = useSelector(state => state.reduxReducer.players);

  const setScrabbleScoreData = (scrabbleWord, score, playerID) => {
    dispatch(addScrabbleDataAction(scrabbleWord, score, playerID));
  };

  const changePlayers = (playerID, statusActive, playerName, playerColor) => {
    dispatch(
      changePlayersAction(playerID, statusActive, playerName, playerColor),
    );
  };

  return {
    currentScoreList,
    currentPlayer,
    setScrabbleScoreData,
    changePlayers,
  };
};
