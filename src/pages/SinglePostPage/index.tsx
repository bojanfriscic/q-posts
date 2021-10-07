import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { IPostRouteParams } from '../../interfaces/IPostRouteParams';
import { IPost } from '../../interfaces/IPost';
import { IComment } from '../../interfaces/IComment';
import { api } from '../../config/api';
import SinglePostPageUI from './ui/SinglePostPageUI';

const SinglePostPage = () => {
    const { id } = useParams<IPostRouteParams>();
    const postApiUrl = `${api.posts}/${id}`;
    const commentsApiUrl = `${postApiUrl}/comments`;

    const [comments] = useFetch<IComment>(commentsApiUrl);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');   
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetch(postApiUrl)
            .then(response => response.json())
            .then((data: IPost) => {
                setTitle(data.title);
                setBody(data.body);
                setIsLoading(false);
                setHasError(false);
            })
            .catch(err => {
                setHasError(true);
                setIsLoading(false);
            });
    }, [postApiUrl, comments]);

    return (
        <SinglePostPageUI
            title={title}
            body={body}
            comments={comments}
            hasError={hasError}
            isLoading={isLoading}
        />
    );
};

export default SinglePostPage;