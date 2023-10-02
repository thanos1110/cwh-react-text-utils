import React from "react";

function LoginWithOtp() {
  return (
    <div>
      <h1>Login With Otp</h1>

      <h4>
        Phone Number:
        <input type="number" />
      </h4>
      <button className="btn btn-success">Submit</button>
    </div>
  );
}

export default LoginWithOtp;
