import React from "react";

function LoginWithPassword() {
  return (
    <div>
      <h1>Login With Password</h1>
      <h4>
        Login: <input type="text" />
      </h4>
      <h4>
        Password: <input type="password" name="" id="" />
      </h4>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </div>
  );
}

export default LoginWithPassword;
