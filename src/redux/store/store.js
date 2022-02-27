
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userDetailsReducer,registerUserReducer} from '../reducers/userReducer'

const initialState = {};

const reducers = combineReducers({
  userDetails: userDetailsReducer,
  registerUser: registerUserReducer,
});

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
