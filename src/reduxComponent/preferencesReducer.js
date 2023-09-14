const initialState = {
  preferiti: [],
};

const preferencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AGGIUNGI_PREFERITO":
      return {
        ...state,
        preferiti: [...state.preferiti, action.payload],
      };
    default:
      return state;
  }
};

export default preferencesReducer;
