import { FC, useState, useContext, useEffect } from 'react';
import { FilterContext } from '../../context/FilterContext';
import { DataContext } from '../../../core/context/DataContext';
import { IDataObject } from '../../../core/interfaces/IData';
import { PostsUI } from './components/PostsUI';
import styles from './scss/Posts.module.scss';

const Posts: FC = () => {
    const { filter } = useContext(FilterContext);
    const { data, isLoading, hasError } = useContext(DataContext);
    const [posts, setPosts] = useState<Array<IDataObject>>(data);
    const { postsComponent } = styles;

    useEffect(() => {
        let tempPosts: Array<IDataObject> = [];

        if (data && !isLoading && !hasError) {
            data.forEach(post => {
                if (post.title.includes(filter)) tempPosts.push(post);
            });

            setPosts(tempPosts);
        }

    }, [filter, data, isLoading, hasError]);

    return (
        <section className={postsComponent}>
            <PostsUI data={posts} isLoading={isLoading} hasError={hasError} />
        </section>
    );
};

export default Posts;