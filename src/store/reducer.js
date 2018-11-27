const defaultState = {
  isFocus: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "search_foucs":
      return {
        isFocus: true
      };
    case "search_blur":
      return {
        isFocus: false
      };
    default:
      return state;
  }
};
