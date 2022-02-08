import { auth } from "../../utils/auth-service";
import * as types from "../types";

//login user
export const login = (email, password) => async (dispatch) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    const idToken = await auth.currentUser.getIdToken();
    sessionStorage.setItem("token", idToken);
    dispatch({ type: types.LOG_IN_SUCCESS, payload: auth.currentUser });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

//logout user
export const logout = () => async (dispatch) => {
  dispatch({ type: types.LOGOUT });
};

//register user
export const registration = (email, password) => async (dispatch) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    dispatch({ type: types.REGISTER_SUCCESS, payload: auth.currentUser });
  } catch (error) {
    console.log(error);
  }
};

// add user after login
export const addUser = (userInfo) => async (dispatch) => {
  try {
    dispatch({ type: types.ADD_USER, payload: userInfo });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
