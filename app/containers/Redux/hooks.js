import { useDispatch, useSelector } from 'react-redux';
import { addScrabbleDataAction, changePlayersAction } from './actions';

export const useSelectScores = () => {
  const dispatch = useDispatch();
  const currentScoreList = useSelector(state => state.reduxReducer.allScores);

  const currentPlayer = useSelector(state => state.reduxReducer.players);

  const setScrabbleScoreData = (scrabbleWord, score) => {
    dispatch(addScrabbleDataAction(scrabbleWord, score));
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

  return {
    currentScoreList,
    currentPlayer,
    setScrabbleScoreData,
    changePlayers,
  };
};
