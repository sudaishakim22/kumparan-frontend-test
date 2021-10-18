import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import postReducer from "./reducers/postReducer";
import userReducer from "./reducers/userReducer";
import commentsReducer from "./reducers/commentsReducer";

const rootReducer = combineReducers({
  post: postReducer,
  users: userReducer,
  comments: commentsReducer,
});

export const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
