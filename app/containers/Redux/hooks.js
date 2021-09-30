import { useDispatch, useSelector } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import {
  addScrabbleDataAction,
  changePlayersAction,
  fetchUserAction,
  resetStateAction,
  setHighscoreTableAction,
  desetHighscoreTableAction,
} from './actions';
import { watchFetchUser } from './saga';

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

  const resetState = () => {
    dispatch(resetStateAction());
  };

  return {
    currentScoreList,
    currentPlayer,
    setScrabbleScoreData,
    changePlayers,
    resetState,
  };
};

export const useSelectUsers = () => {
  useInjectSaga({ key: 'fetchUserKey', saga: watchFetchUser });

  const dispatch = useDispatch();
  const allUsers = useSelector(state => state.reduxReducer.users);
  const highscoreTable = useSelector(state => state.reduxReducer.highscoreTable);
  const fetchUser = () => {
    dispatch(fetchUserAction());
  };

  const setHighscoreTable = () => {
    dispatch(setHighscoreTableAction());
  };

  const desetHighscoreTable = () => {
    dispatch(desetHighscoreTableAction());
  };

  return {
    allUsers,
    highscoreTable,
    fetchUser,
    setHighscoreTable,
    desetHighscoreTable,
  };
};
