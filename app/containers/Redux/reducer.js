const reduxReducer = (state = [], action) => {
  if (action.type === 'scrabbelScoreAdded') {
    return [
      ...state,
      {
        id: 0,
        wort: 'Hallo',
        punktezahl: 8,
      },
    ];
  }
  return state;
};

export default reduxReducer;
