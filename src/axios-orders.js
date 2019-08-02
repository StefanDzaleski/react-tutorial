import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-b2f75.firebaseio.com/'
});

export default instance;

