const defaultState = {
  isFocus: false
};

export default (state = defaultState, action) => {
  if (action.type === "search_foucs") {
    return {
      isFocus: true
    };
  }
  if (action.type === "search_blur") {
    return {
      isFocus: false
    };
  }
  return state;
};
