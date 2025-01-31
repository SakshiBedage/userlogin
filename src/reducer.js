import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actions";

const initialState = {
  isUserValid: "No",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      console.log("test");
      return { ...state, isUserValid: "loading" };
    }

    case LOGIN_SUCCESS:
      return { ...state, isUserValid: true };
    case LOGIN_FAILURE:
      return { ...state, isUserValid: false };
    default:
      return state;
  }
};

export default authReducer;
