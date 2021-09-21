/*
 *
 * Redux actions
 *
 */
import { ADD_SCRABBLE_DATA, CHANGE_PLAYERS, DEFAULT_ACTION } from './constants';

/* An action is a plain JavaScript object, describing in the minimal way what changed in the application.
 *  Whether it is initiated by a network request or by user interaction, any data that gets into the Redux application gets there by actions.
 *
 */

export const defaultAction = () => ({
  type: DEFAULT_ACTION,
});

// Action creator => creates and returns an action object
export const addScrabbleDataAction = (scrabbleWord, score) => ({
  type: ADD_SCRABBLE_DATA,
  payload: { scrabbleWord, score },
});

export const changePlayersAction = (
  playerID,
  statusActive,
  playerName,
  totalOlayerScore,
  playerColor,
) => ({
  type: CHANGE_PLAYERS,
  payload: {
    playerID,
    statusActive,
    playerName,
    totalOlayerScore,
    playerColor,
  },
});
