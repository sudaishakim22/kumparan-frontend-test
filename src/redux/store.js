import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import postReducer from "./reducers/postReducer";

const rootReducer = combineReducers({
  postReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
