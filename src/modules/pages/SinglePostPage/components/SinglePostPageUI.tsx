import { IComment } from '../../../../core/interfaces/IComment';
import { Loading } from '../../../../shared/components/Loading';
import { Error } from '../../../../shared/components/Error';
import { Comment } from '../../../../shared/components/Comment';

interface ISinglePostPageProps {
    title: string;
    body: string;
    author: string;
    comments: Array<IComment>;
    isPostLoading: boolean;
    hasPostError: boolean;
    isCommentsLoading: boolean;
    hasCommentsError: boolean;
};

const SinglePostPageUI = (props: ISinglePostPageProps) => {
    const { 
        title, 
        body, 
        author, 
        comments,
        isPostLoading, 
        hasPostError,
        isCommentsLoading,
        hasCommentsError
    } = props;
    
    const renderPostLoading = isPostLoading && <Loading name='Post' />
    const renderPostError = !isPostLoading && hasPostError && <Error />;
    const renderPost = !isPostLoading && !hasPostError && (
        <>
            <h1>{title}</h1>
            <span>by {author}</span>
            <p>{body}</p>
        </>
    );

    const renderCommentsLoading = isCommentsLoading && <Loading name='Comments' />;
    const renderCommentsError = !isCommentsLoading && hasCommentsError && <Error />;
    const renderComments = !isPostLoading && !hasCommentsError && comments.map(comment => <Comment key={comment.id} {...comment} />)

    return (
        <>
            <section>
                {renderPostLoading}
                {renderPostError}
                {renderPost}
            </section>
            <hr />
            <section>
                <h2>Comments</h2>
                {renderCommentsLoading}
                {renderCommentsError}
                {renderComments}
            </section>
        </>
    );
};

export { SinglePostPageUI };