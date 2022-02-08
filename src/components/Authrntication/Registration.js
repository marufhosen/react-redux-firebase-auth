import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registration } from "../../redux/actions/userAction";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleReg = () => {
    dispatch(registration(email, password));
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
      <button onClick={handleReg}>REGISTER</button>
    </div>
  );
};

export default Registration;
