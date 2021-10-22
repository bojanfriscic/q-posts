import { FC, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../core/store/hooks';
import { getPostsArchive } from '../../core/store/thunks/postsArchiveThunk';

const PostsPage: FC = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(state => state.postsArchive);
    
    useEffect(() => {
        dispatch(getPostsArchive());
    }, [dispatch]);

    return (
        <div>
            POSTS PAGE
        </div>
    );
};

export default PostsPage;