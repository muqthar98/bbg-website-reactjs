import { ADD_USER_FAIL, ADD_USER_REQUEST, ADD_USER_SUCCESS,GET_USERS_FAIL, GET_USERS_REQUEST, GET_USERS_SUCCESS } from "../constants/userConstants";
import axios from 'axios'

export const listUsers = () => async (dispatch) => {
    try {
      dispatch({ type: GET_USERS_REQUEST });
  
      const { data } = await axios.get("http://localhost:5000/user/getUsers");
  
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_USERS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const userRegister = (name, email, message) =>
    async (dispatch) => {
      try {
        dispatch({ type: ADD_USER_REQUEST });
  
        const { data } = await axios.post("http://localhost:5000/user/register", {
          name,
          email,
          message,
        });
  
        dispatch({
          type: ADD_USER_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: ADD_USER_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    };