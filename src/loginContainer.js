import { useSelector } from "react-redux";
import Login from "./login";
import Message from "./message";

const LoginContainer = () => {
  const isUserValid = useSelector((state) => state.isUserValid);

  return (
    <div>
      {isUserValid === "No" || isUserValid === "loading" ? (
        <Login />
      ) : (
        <Message />
      )}
    </div>
  );
};

export default LoginContainer;
