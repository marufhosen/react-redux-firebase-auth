import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../../redux/actions/userAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(login(email, password));
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
        id=""
      />
      <br />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
        id=""
      />
      <br />
      <button onClick={handleLogin}>LOGIN</button>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};

export default Login;
