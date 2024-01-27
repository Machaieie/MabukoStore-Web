import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    headers: {
        "Content-type": "application/json",
    },
})

axiosInstance.interceptors.request.use(
    (config) => {
        const user = localStorage.getItem("principal");
        if (user) {
            config.headers.Authorization = `Bearer ${JSON.parse(user).accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;