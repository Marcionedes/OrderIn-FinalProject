import axios from 'axios';
//Initialize  Firebase on the project
const instance = axios.create({
    baseURL: 'https://orderin-project-2015254.firebaseio.com/'
});

export default instance;