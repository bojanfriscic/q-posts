import { IComment } from '../../interfaces/IComment';
import { useLogger } from '../../hooks/useLogger';
import Comment from '../Comment';

interface ICommentsComponent {
    comments: Array<IComment>;
};

const Comments = (props: ICommentsComponent) => {
    const { comments } = props;
    useLogger({componentName: 'Comments'});

    const renderNoComments = comments.length === 0 && (
        <p className="c-comments__no-comments">There are no comments to display.</p>
    );

    const renderComments = comments.length > 0 && 
        comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
        ));

    return (
        <section className="c-comments">
            <h2 className="c-comments__title">Comments</h2>
            {renderNoComments}
            {renderComments}
        </section>
    )
};

export default Comments;