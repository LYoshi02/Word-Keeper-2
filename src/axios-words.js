import axios from "axios";

const instance = axios.create({
    baseURL: 'https://word-keeper-c8243.firebaseio.com/'
});

export default instance;