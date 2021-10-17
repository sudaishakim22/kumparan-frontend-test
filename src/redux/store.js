import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import postReducer from "./reducers/postReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  post: postReducer,
  users: userReducer,
});

export const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
