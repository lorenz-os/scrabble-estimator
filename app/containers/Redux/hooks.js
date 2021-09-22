import { useDispatch, useSelector } from 'react-redux';
import {
  addScrabbleDataAction,
  changePlayersAction,
  getTotalPlayerScore,
} from './actions';

export const useSelectScores = () => {
  const dispatch = useDispatch();
  const currentScoreList = useSelector(state => state.reduxReducer.allScores);

  const currentPlayer = useSelector(state => state.reduxReducer.players);

  const setScrabbleScoreData = (scrabbleWord, score, playerID) => {
    dispatch(addScrabbleDataAction(scrabbleWord, score, playerID));
  };

  const changePlayers = (
    playerID,
    statusActive,
    playerName,
    totalPlayerScore,
    playerColor,
  ) => {
    dispatch(
      changePlayersAction(
        playerID,
        statusActive,
        playerName,
        totalPlayerScore,
        playerColor,
      ),
    );
  };

  const getTotalPlayerScrabbleScore = (playerID, scrabbleScore) => {
    dispatch(getTotalPlayerScore(playerID, scrabbleScore));
  };

  return {
    currentScoreList,
    currentPlayer,
    setScrabbleScoreData,
    changePlayers,
    getTotalPlayerScrabbleScore,
  };
};
