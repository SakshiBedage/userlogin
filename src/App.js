import { Provider } from "react-redux";
import store from "./store";
import LoginContainer from "./loginContainer";

function App() {
  return (
    <div>
      <Provider store={store}>
        <LoginContainer />
      </Provider>
    </div>
  );
}

export default App;
