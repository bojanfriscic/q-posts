import axios from 'axios';

const apiInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const getPosts = () => apiInstance.get('/posts').then(response => response.data);
const getUsers = () => apiInstance.get('/users').then(response => response.data);
const getComments = () => apiInstance.get('/comments').then(response => response.data);

export const api = {
    getPosts,
    getUsers,
    getComments
};