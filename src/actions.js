export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginRequest = () => {
  console.log("login action");
  return { type: "LOGIN_REQUEST" };
};
export const loginSuccess = () => ({ type: "LOGIN_SUCCESS" });
export const loginFailure = () => ({ type: "LOGIN_FAILURE" });
