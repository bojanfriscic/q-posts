import { FC, useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import { useAppSelector, useAppDispatch } from '../../core/store/hooks';
import { getPostsArchive } from '../../core/store/thunks/postsArchiveThunk';
import { ISinglePostRouteParams } from '../../core/interfaces/ISinglePostRouteParams';
import { REQUEST_STATUS } from '../../core/enums/requestStatus';
import { PostContent } from './components/PostContent';
import { Comments } from './components/Comments';

const PostPage: FC = () => {
    const { id } = useParams<ISinglePostRouteParams>();
    const postsArchive = useAppSelector(state => state.postsArchive);
    const { data, error, status } = postsArchive;
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const setPostContent = useCallback(() => {
        const currentPost = data.find(post => post.id === +id);
        
        if (currentPost) {
            const { title, author, body } = currentPost;
            setTitle(title);
            setAuthor(author);
            setBody(body);
        }
    }, [data, id]);

    useEffect(() => {
        setIsLoading(true);
        setHasError(false);

        switch (status) {
            case REQUEST_STATUS.INACTIVE: {
                dispatch(getPostsArchive());
                break;
            }
            case REQUEST_STATUS.PENDING: {
                setIsLoading(true);
                break;
            }
            case REQUEST_STATUS.FULFILLED: {
                setPostContent();
                setIsLoading(false);
                break;
            }
            case REQUEST_STATUS.REJECTED: {
                setHasError(true);
                setIsLoading(false);
                break;
            }
            default: 
                return;
        }

    }, [dispatch, setPostContent, data, error, status]);

    const postContentProps = {
        title, 
        body,
        author,
        isLoading,
        hasError
    };

    return (
        <>
            <PostContent {...postContentProps} />
            <Comments id={+id} />
        </>
    )
};

export default PostPage;