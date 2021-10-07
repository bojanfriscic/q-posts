import { IComment } from '../../../interfaces/IComment';
import Title from '../../../components/Title'
import PostBody from '../../../components/PostBody';
import Comments from '../../../components/Comments';
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';

interface SinglePostPageUIComponent {
    title: string;
    body: string;
    comments: Array<IComment>;
    hasError: boolean;
    isLoading: boolean;
}

const SinglePostPageUI = (props: SinglePostPageUIComponent) => {
    const { title, body, comments, hasError, isLoading } = props;

    const renderLoading = isLoading && <Loading />;
    const renderError = hasError && <Error />;
    const renderContent = !isLoading && (
        <>
            <Title content={title} level={1} />
            <PostBody content={body} />
            <hr />
            <Comments comments={comments} />
        </>
    );
    
    return (
        <article className="c-single-post">
            {renderLoading}
            {renderError}
            {renderContent}
        </article>
    );
};

export default SinglePostPageUI;