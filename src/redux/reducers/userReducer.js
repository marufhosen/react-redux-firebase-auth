import * as types from "../types";

const initialState = {
  user: [],
  loginUser: {},
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        loginUser: action.payload,
        isAuthenticated: true,
      };

    case types.LOG_IN_SUCCESS:
      return {
        ...state,
        loginUser: action.payload,
        isAuthenticated: true,
        success: true,
      };

    case types.LOGOUT:
      sessionStorage.removeItem("token");
      return {
        ...state,
        loginUser: {},
        isAuthenticated: false,
      };
      
    case types.ADD_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
