import { connect, useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { loginRequest, loginFailure, loginSuccess } from "./actions";
import React, { useEffect } from "react";

class LoginComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  shouldComponentUpdate() {
    console.log("should Component update");
    return true;
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentDidMount() {
    console.log("compoent mounted");
  }
  componentWillUnmount() {
    console.log("component unmounted that means removed from DOM");
  }
  handleLogin = () => {
    this.props.loginReq();
    setTimeout(() => {
      const success = Math.random() > 0.5;
      success ? this.props.loginSuc() : this.props.loginFail();
    }, 2000);
  };
  render() {
    const { isUserValid } = this.props;
    console.log("isUserValid: ", isUserValid);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        {isUserValid === "loading" ? (
          <ClipLoader color="#3498db" size={50} />
        ) : (
          <div>
            <input
              type="text"
              placeholder="username"
              style={{ width: "200px" }}
              value={this.state.input}
              onChange={(e) => {
                this.setState({ input: e.target.value });
              }}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              style={{ width: "200px" }}
            />
            <br />
            <button
              onClick={() => {
                this.handleLogin();
              }}
            >
              Login
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state: ", state);
  return {
    isUserValid: state.isUserValid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginReq: () => {
      dispatch(loginRequest());
    },
    loginFail: () => {
      dispatch(loginFailure());
    },
    loginSuc: () => {
      dispatch(loginSuccess());
    },
  };
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComp);

/**const Login = () => {
  const dispatch = useDispatch();
  const isUserValid = useSelector((state) => state.isUserValid);

  useEffect(() => {
    console.log("Component loaded");
    return () => {
      console.log("cleanup function got called");
    };
  }, []);
  const handleLogin = () => {
    dispatch(loginRequest());
    setTimeout(() => {
      const success = Math.random() > 0.5;
      dispatch(success ? loginSuccess() : loginFailure());
    }, 2000);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      {isUserValid === "loading" ? (
        <ClipLoader color="#3498db" size={50} />
      ) : (
        <div>
          <input
            type="text"
            placeholder="username"
            style={{ width: "200px" }}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            style={{ width: "200px" }}
          />
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};**/

export default Login;
