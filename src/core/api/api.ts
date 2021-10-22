import axios from 'axios';
import { IPost } from '../interfaces/IPost';
import { IUser } from '../interfaces/IUser';
import { IComment } from '../interfaces/IComment';
import { IPostArchiveItem } from '../interfaces/IPostArchiveItem';

const apiInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const getPosts = () => apiInstance.get<Array<IPost>>('/posts').then(response => response.data);
const getUsers = () => apiInstance.get<Array<IUser>>('/users').then(response => response.data);
const getComments = () => apiInstance.get<Array<IComment>>('/comments').then(response => response.data);
const getPostsArchive = async () => {
    const posts = await getPosts();
    const users = await getUsers();
    const comments = await getComments();

    const postsArchive: Array<IPostArchiveItem> = [];

    if (posts.length > 0 && users.length > 0 && comments.length > 0) {
        posts.forEach(post => {
            const { id, userId } = post;
            let author: string;
            let numComments: number;

            const user = users.find(user => user.id === userId);
            if (user) {
                const { name, username } = user;
                author = `${name} (${username})`;
            } else {
                author = 'Unknown author';
            }

            const postComments = comments.filter(comment => comment.postId === id);
            numComments = comments && comments.length > 0 
                ? postComments.length
                : 0;

            postsArchive.push({
                ...post,
                author,
                numComments
            })
        });
    }

    return postsArchive;
}

const posts = {
    get: getPosts
};

const users = {
    get: getUsers
};

const comments = {
    get: getComments
};

const postsArchive = {
    get: getPostsArchive
};

const api = {
    posts,
    users,
    comments,
    postsArchive
};

export default api;