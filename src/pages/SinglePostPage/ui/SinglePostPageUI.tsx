import { IComment } from '../../../interfaces/IComment';
import { useLogger } from '../../../hooks/useLogger';
import Container from '../../../hoc/Container';
import Title from '../../../components/Title';
import Author from '../../../components/Author';
import PostBody from '../../../components/PostBody';
import Comments from '../../../components/Comments';
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';

interface SinglePostPageUIComponent {
    author: string;
    title: string;
    body: string;
    comments: Array<IComment>;
    hasError: boolean;
    isLoading: boolean;
}

const SinglePostPageUI = (props: SinglePostPageUIComponent) => {
    const { author, title, body, comments, hasError, isLoading } = props;
    useLogger({ componentName: 'SinglePostPageUI' });

    const renderLoading = isLoading && <Loading />;
    const renderError = hasError && <Error />;
    const renderContent = !isLoading && (
        <>
            <Title content={title} level={1} />
            <Author name={author} />
            <PostBody content={body} />
            <Comments comments={comments} />
        </>
    );
    
    return (
        <article className="c-single-post">
            <Container>
                {renderLoading}
                {renderError}
                {renderContent}
            </Container>
        </article>
    );
};

export default SinglePostPageUI;