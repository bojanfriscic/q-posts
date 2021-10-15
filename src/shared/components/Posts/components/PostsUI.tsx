import { FC } from 'react';
import { IDataObject } from '../../../../core/interfaces/IData';
import { Loading } from '../../Loading';
import { Error } from '../../Error';
import { Post } from '../../Post';

interface PostsUIProps extends Partial<FC> {
    data: Array<IDataObject>;
    isLoading: boolean;
    hasError: boolean;
}

const PostsUI = (props: PostsUIProps) => {
    const { data, isLoading, hasError } = props;

    const renderLoading = isLoading && <Loading />;

    const renderError = !isLoading && hasError && <Error />

    const renderPosts = !isLoading && !hasError && data.map(post => (
        <Post key={post.id} {...post} />
    ));

    const renderNoPosts = !isLoading && !hasError && data.length === 0 && (
        <p>There are no posts to display</p>
    );

    return (
        <>
            {renderLoading}
            {renderError}
            {renderPosts}
            {renderNoPosts}
        </>
    );
};

export { PostsUI };