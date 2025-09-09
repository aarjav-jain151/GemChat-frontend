import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'https://gemchat-backend-ojkh.onrender.com',
    headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
})


export default axiosInstance;   