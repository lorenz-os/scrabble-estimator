// import produce from 'immer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {
  ADD_SCRABBLE_DATA,
  DEFAULT_ACTION,
  CHANGE_PLAYERS,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  RESET_STATE,
  SHOW_HIGHSCORE_TABLE,
} from './constants';

// should be implemented as the empty scrabbleWordAndDataArray
export const initialState = {
  allScores: [],
  players: {
    statusActive: false,
    playerID: 0,
    playerName: 'PlayerZero',
    totalPlayerScore: 0,
    playerColor: '#3375D1',
  },
  users: {
    userArray: [],
  },
  error: {},
  highscoreTable: {
    isActive: false,
  },
};

let listId = 0;
const getNewListId = () => {
  listId += 1;
  return listId;
};

// think of a reducer as an event listener which handles events based on the received action(event) type
const reduxReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      break;
    case ADD_SCRABBLE_DATA:
      return {
        ...state,
        allScores: [
          ...state.allScores,
          {
            id: getNewListId(),
            word: action.payload.scrabbleWord,
            score: action.payload.score,
            playerID: action.payload.playerID,
          },
        ],
      };
    case CHANGE_PLAYERS:
      return {
        ...state,
        players: {
          statusActive: true,
          playerID: action.payload.playerID,
          playerName: action.payload.playerName,
          playerColor: action.payload.playerColor,
        },
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        users: {
          userArray: action.payload.data.map(person => ({
            userId: person.id,
            userName: person.name,
          })),
        },
      };
    case RESET_STATE:
      return {
        ...state,
        allScores: [],
        players: {
          statusActive: false,
          playerID: 0,
          playerName: 'PlayerZero',
          totalPlayerScore: 0,
          playerColor: '#3375D1',
        },
        highscoreTable: {
          isActive: false,
        },
      };
    case SHOW_HIGHSCORE_TABLE:
      return {
        ...state,
        highscoreTable: {
          isActive: !state.highscoreTable.isActive,
        },
      };
    default:
      return state;
  }
  return state;
};

const persistConfig = {
  key: 'reduxReducer',
  storage,
  blacklist: ['error', 'users'],
};

export default persistReducer(persistConfig, reduxReducer);
