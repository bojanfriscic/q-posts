import { FC } from 'react';
import { Loading } from '../../../shared/components/Loading';
import { Error } from '../../../shared/components/Error';
import postContent from '../scss/PostContent.module.scss';

interface IPostContentProp {
    title: string;
    body: string;
    author: string;
    isLoading: boolean;
    hasError: boolean;
}

const PostContent: FC<IPostContentProp> = props => {
    const { title, body, author, isLoading, hasError } = props;
    
    const renderLoading = isLoading && <Loading />;

    const renderError = !isLoading && hasError && <Error message={'Your post could not be loaded.'} />

    const renderContent = !isLoading && !hasError && (
        <>
            <h1 className={postContent.heading}>{title}</h1>
            <div className={postContent.meta}>
                by <span className={postContent.meta__author}>{author}</span>
            </div>
            <div className={postContent.body}>{body}</div>
        </>
    );

    return (
        <section className={postContent.base}>
            {renderLoading}
            {renderError}
            {renderContent}
        </section>
    );
};

export { PostContent };