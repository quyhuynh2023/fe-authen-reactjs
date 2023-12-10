import React, { useContext, useRef } from "react";
import AuthContext from "../../components/shared/AuthContext";

function Login() {
  const formRef = useRef();

  const { login } = useContext(AuthContext);

  const loginSubmit = async (event) => {
    event.preventDefault();
    let payload = {
      email: formRef.current.email.value,
      password: formRef.current.password.value,
    };
    await login(payload);
  };

  return (
    <div>
      <form ref={formRef} onSubmit={loginSubmit}>
        <fieldset>
          <legend>Login</legend>
          <input type="text" name="email" placeholder="enter email" />
          <br />
          <input type="password" name="password" placeholder="enter password" />
          <br />
          <button type="submit">login</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
