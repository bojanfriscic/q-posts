import { FC, useContext, useState, useEffect } from 'react';
import { PostsArchiveContext } from '../../../core/context/PostsArchiveContext/PostsArchiveContext';
import { REQUEST_STATUS } from '../../../core/enums/requestStatus';
import { IPostArchiveItem } from '../../../core/interfaces/IPostArchiveItem';
import { Error } from '../../../shared/components/Error';
import { Loading } from '../../../shared/components/Loading';
import { Post } from './Post';

const Posts: FC = () => {
    const context = useContext(PostsArchiveContext);
    const { data, status, error, filter } = context;
    const [posts, setPosts] = useState<Array<IPostArchiveItem>>([]);

    useEffect(() => {
        let tempPosts: Array<IPostArchiveItem> = [];

        if (status === REQUEST_STATUS.FULFILLED && data.length > 0) {
            data.forEach(post => {
                if (post.title.includes(filter)) tempPosts.push(post);
            });

            setPosts(tempPosts);
        }
    }, [data, status, filter])

    const renderLoading = status === REQUEST_STATUS.PENDING && <Loading />;

    const renderError = status === REQUEST_STATUS.REJECTED && error && <Error message={error} />;

    const renderPosts = status === REQUEST_STATUS.FULFILLED && posts.length > 0 && posts.map(post => <Post key={post.id} {...post} />)

    const renderNoPosts = status === 
        REQUEST_STATUS.FULFILLED &&
        posts.length === 0 &&
        filter !== '' &&
        <Error message={'There are no posts to display.'} />;

    return (
        <section>
            <h2>Posts</h2>
            {renderLoading}
            {renderError}
            {renderPosts}
            {renderNoPosts}
        </section>
    );
};

export { Posts }