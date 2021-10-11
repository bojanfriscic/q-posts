import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../../context/DataContext';
import { useFetch } from '../../hooks/useFetch';
import { useLogger } from '../../hooks/useLogger';
import { IPostRouteParams } from '../../interfaces/IPostRouteParams';
import { IComment } from '../../interfaces/IComment';
import { api } from '../../config/api';
import SinglePostPageUI from './ui/SinglePostPageUI';

const SinglePostPage = () => {
    const { id } = useParams<IPostRouteParams>();
    const { data } = useContext(DataContext);
    const postApiUrl = `${api.posts}/${id}`;
    const commentsApiUrl = `${postApiUrl}/comments`;

    const [comments] = useFetch<IComment>(commentsApiUrl);
    const [postAuthor, setpostAuthor] = useState('');
    const [postTitle, setpostTitle] = useState('');
    const [postBody, setpostBody] = useState('');   
    const [isLoading, setIsLoading] = useState(true);

    useLogger({ componentName: 'SinglePostPage' });

    useEffect(() => {
        if (id) {
            const currentPost = data.find(post => post.id === +id);
            
            if (currentPost) {
                const { author, title, body } = currentPost;
                
                setpostAuthor(author);
                setpostTitle(title);
                setpostBody(body);
                setIsLoading(false);
            }
        }

        
    }, [data, comments, id]);

    return (
        <SinglePostPageUI
            author={postAuthor}
            title={postTitle}
            body={postBody}
            comments={comments}
            isLoading={isLoading}
        />
    );
};

export default SinglePostPage;