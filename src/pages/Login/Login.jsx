import React, { useContext, useEffect, useRef } from 'react'
import AuthContext from '../../components/shared/AuthContext';


function Login() {
    const email = useRef('');
    const password = useRef('');
    const { login } = useContext(AuthContext);
    const loginSubmit = async (event) => {
        event.preventDefault();
        let payload = {
            email: email.current.value,
            password: password.current.value,
        }
        await login(payload)
    }

    return (
        <div>
            <form onSubmit={loginSubmit}>
                <fieldset>
                    <legend>Login</legend>
                    <input type='text' placeholder="enter email" ref={email} /><br />
                    <input type='password' placeholder="enter password" ref={password} /><br />
                    <button type="submit">login</button>
                </fieldset>
            </form>

        </div>
    )
}

export default Login