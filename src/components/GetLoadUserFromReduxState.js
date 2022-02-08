import React from "react";
import { useSelector } from "react-redux";

const GetLoadUserFromReduxState = () => {
  const users = useSelector(({ userState }) => userState.user);
  users.length && console.log(users);
  return (
    <div>
      <h1>GET User From Redux Auth</h1>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default GetLoadUserFromReduxState;
