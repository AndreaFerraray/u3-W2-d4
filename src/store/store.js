// store.js
import { createStore, combineReducers } from "redux";
import preferencesReducer from "../reduxComponent/preferencesReducer";

const rootReducer = combineReducers({
  preferences: preferencesReducer,
});

const store = createStore(rootReducer);

export default store;
