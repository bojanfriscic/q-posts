import { FC, useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../core/store/hooks';
import { getPostsArchive } from '../../core/store/thunks/postsArchiveThunk';
import { PostsArchiveContext } from '../../core/context/PostsArchiveContext/PostsArchiveContext';
import { REQUEST_STATUS } from '../../core/enums/requestStatus';
import { Filter } from './components/Filter';
import { Posts } from './components/Posts';
import postsPageComponent from './scss/PostsPage.module.scss';

const PostsPage: FC = () => {
    const dispatch = useAppDispatch();
    const postsArchive = useAppSelector(state => state.postsArchive);
    const { status } = postsArchive;
    
    const [filter, setFilter] = useState('');

    useEffect(() => {
        if (status === REQUEST_STATUS.INACTIVE) dispatch(getPostsArchive());
    }, [dispatch, status]);

    const contextValue = {
        ...postsArchive,
        filter,
        setFilter
    };

    return (
        <section>
            <PostsArchiveContext.Provider value={contextValue}>
                <h1 className={postsPageComponent.mainHeading}>Posts Archive</h1>
                <Filter />
                <Posts />
            </PostsArchiveContext.Provider>
        </section>
    );
};

export default PostsPage;