const initState = {
  score: 1,
};

export default function (state = initState, action) {
  switch (action.type) {
    case 'SET_HIGHEST_SCORE':
      return { state: action.payload };

    default:
      return state;
  }
}
