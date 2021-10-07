import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { IPostRouteParams } from '../../interfaces/IPostRouteParams';
import { IPost } from '../../interfaces/IPost';
import { IComment } from '../../interfaces/IComment';
import { IUser } from '../../interfaces/IUser';
import { api } from '../../config/api';
import SinglePostPageUI from './ui/SinglePostPageUI';

const SinglePostPage = () => {
    const { id } = useParams<IPostRouteParams>();
    const postApiUrl = `${api.posts}/${id}`;
    const commentsApiUrl = `${postApiUrl}/comments`;

    const [comments] = useFetch<IComment>(commentsApiUrl);
    const [users] = useFetch<IUser>(api.users);
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');   
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetch(postApiUrl)
            .then(response => response.json())
            .then((data: IPost) => {
                const tempAuthor = users.find(user => user.id === +id);

                setAuthor(`${tempAuthor?.username} (${tempAuthor?.name})`);
                setTitle(data.title);
                setBody(data.body);

                setIsLoading(false);
                setHasError(false);
            })
            .catch(err => {
                setHasError(true);
                setIsLoading(false);
                console.error(err);
            });
    }, [postApiUrl, comments, users, id]);

    return (
        <SinglePostPageUI
            author={author}
            title={title}
            body={body}
            comments={comments}
            hasError={hasError}
            isLoading={isLoading}
        />
    );
};

export default SinglePostPage;