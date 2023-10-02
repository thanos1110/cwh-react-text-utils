import React, { useState } from "react";
import LoginWithOtp from "./LoginWithOtp";
import LoginWithPassword from "./LoginWithPassword";
function Login() {
  const [passPage, setPassPage] = useState(true);
  let toggle = () => {
    setPassPage(!passPage)
  }
  return (
    <div className="container">
      <button
        className="btn btn-danger"
        onClick={toggle}
      >
        Switch
      </button>
      <hr />
      {(passPage) ?
        <LoginWithPassword /> :
        <LoginWithOtp />}
    </div>
  );
}

export default Login;
