import { ADD_USER_FAIL, ADD_USER_REQUEST, ADD_USER_SUCCESS, GET_USERS_FAIL, GET_USERS_REQUEST, GET_USERS_SUCCESS} from "../constants/userConstants";


export const registerUserReducer = (state = {}, action) => {
    switch (action.type) {
      case ADD_USER_REQUEST:
        return { ...state, loading: true };
      case ADD_USER_SUCCESS:
         return { loading: false, user: action.payload };
      case ADD_USER_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const userDetailsReducer = (state = { users: {}}, action) => {
    switch (action.type) {
      case GET_USERS_REQUEST:
        return { ...state, loading: true };
      case GET_USERS_SUCCESS:
        return { loading: false, users: action.payload };
      case GET_USERS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };