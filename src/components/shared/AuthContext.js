import axios from "axios";

import { jwtDecode } from "jwt-decode";

import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [userId, setUserId] = useState(() => {
        if (localStorage.getItem("tokens")) {
            const tokens = JSON.parse(localStorage.getItem("tokens"));
            const aud = jwtDecode(tokens.accessToken).aud;
            return aud
        } else {
            return null
        }
    });

    const navigate = useNavigate();
    const login = async (payload) => {
        const apiResponse = await axios.post(
            "https://api-authen-nodejs.onrender.com/auth/login",
            payload
        );
        setUserId(jwtDecode(apiResponse.data.accessToken).aud);
        localStorage.setItem("tokens", JSON.stringify(apiResponse.data));
        navigate('/');
    }

    return <AuthContext.Provider value={{ login, userId }}>{children}</AuthContext.Provider>
}

export default AuthContext