import "./App.css";
import LoadUserFromFakeApi from "./components/LoadUserFromFakeApi";
import GetLoadUserFromReduxState from "./components/GetLoadUserFromReduxState";
import Login from "./components/Authrntication/Login";
import Registration from "./components/Authrntication/Registration";

function App() {
  return (
    <div className="App">
      <Registration />
      <div>Login After Reg</div>
      <Login />
      {/* <LoadUserFromFakeApi /> */}
      {/* <GetLoadUserFromReduxState /> */}
    </div>
  );
}

export default App;
