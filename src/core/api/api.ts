import axios from 'axios';
import { IPost } from '../interfaces/IPost';
import { IUser } from '../interfaces/IUser';
import { IComment } from '../interfaces/IComment';

const apiInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const getPosts = () => apiInstance.get<Array<IPost>>('/posts').then(response => response.data);
const getUsers = () => apiInstance.get<Array<IUser>>('/users').then(response => response.data);
const getComments = () => apiInstance.get<Array<IComment>>('/comments').then(response => response.data);

const api = {
    getPosts,
    getUsers,
    getComments
};

export default api;