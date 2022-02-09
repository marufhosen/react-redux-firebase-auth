import { auth } from "../../utils/auth-service";
import * as types from "../types";
import { updateProfile } from "firebase/auth";
import axios from "axios";

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
export const registration = (name, email, password) => async (dispatch) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
    const user = {
      name: auth.currentUser.displayName,
      email: auth.currentUser.email,
    };
    const current_user = await axios.post("http://localhost:4000/user", user);
    console.log("Current_User", current_user);
    dispatch({ type: types.REGISTER_SUCCESS, payload: auth.currentUser });
    // saveUser();
  } catch (error) {
    console.log(error);
  }
};

//save user database
// const saveUser = () => async (dispatch) => {
//   if (sessionStorage.token) {
//     const user = {
//       name: auth.currentUser.displayName,
//       email: auth.currentUser.email,
//     };
//     try {
//       const current_user = await axios.post(
//         "http://localhost:4000/user",
//         user,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log("Current_User", current_user);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// };

// add user after login
export const addUser = (userInfo) => async (dispatch) => {
  try {
    dispatch({ type: types.ADD_USER, payload: userInfo });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
