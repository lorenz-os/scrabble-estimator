// import produce from 'immer';
import { ADD_SCRABBLE_DATA, DEFAULT_ACTION, CHANGE_PLAYERS } from './constants';
// should be implemented as the empty scrabbleWordAndDataArray
export const initialState = {
  allScores: [],
  players: {
    statusActive: false,
    playerID: 0,
    playerName: '',
    totalPlayerScore: 0,
    playerColor: '#24cfaa',
  },
};

function nextListId(allScores) {
  const listId = allScores.reduce(
    (maxId, oneScore) => Math.max(oneScore.id, maxId),
    -1,
  );
  return listId + 1;
}

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
            id: nextListId(state.allScores),
            word: action.payload.scrabbleWord,
            score: action.payload.score,
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
          totalPlayerScore: action.payload.totalPlayerScore,
          playerColor: action.payload.playerColor,
        },
      };
    default:
      return state;
  }
  return state;
};

export default reduxReducer;
