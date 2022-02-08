import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions/userAction";

const LoadUserFromFakeApi = () => {
  const dispatch = useDispatch();
  const handleLoadUser = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(
      (res) => {
        dispatch(addUser(res.data));
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <div>
      <button onClick={handleLoadUser}>LOAD USER</button>
    </div>
  );
};

export default LoadUserFromFakeApi;
