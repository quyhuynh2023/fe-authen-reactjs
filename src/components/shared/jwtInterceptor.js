import axios from "axios";

const jwtInterceptor = axios.create({});

jwtInterceptor.interceptors.request.use(config => {
    const token = JSON.parse(localStorage.getItem("tokens"));
    config.headers.Authorization = `Bearer ${token.accessToken}`;
    return config;
});

jwtInterceptor.interceptors.response.use(response => {
    return response
}, async (error) => {
    console.log(error)
    if (error.response.status === 401) {
        // jwt is exprired
        const tokens = JSON.parse(localStorage.getItem("tokens"));
        const payload = {
            refreshToken: tokens.refreshToken
        }

        const apiResponse = await axios.post("https://api-authen-nodejs.onrender.com/auth/refresh-token", payload);
        localStorage.setItem("tokens", JSON.stringify(apiResponse.data));

        error.config.headers.Authorization = `Bearer ${apiResponse.data.accessToken}`
        return axios(error.config);
    } else {
        return Promise.reject(error);
    }
})


export default jwtInterceptor;