import { useDispatch, useSelector } from 'react-redux';
import {
  addScrabbleDataAction,
  changePlayersAction,
  fetchUserAction,
} from './actions';
import { watchFetchUser } from './saga';
import { useInjectSaga } from 'utils/injectSaga';

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

export const useSelectUsers = () => {
  useInjectSaga({ key: 'HalloTest', saga: watchFetchUser });
  const dispatch = useDispatch();
  const allUsers = useSelector(state => state.reduxReducer.users);

  const fetchUser = () => {
    dispatch(fetchUserAction());
  };

  return {
    allUsers,
    fetchUser,
  };
};
