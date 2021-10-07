import { IComment } from '../../interfaces/IComment';
import { useLogger } from '../../hooks/useLogger';

interface ICommentComponent {
    comment: IComment
}

const Comment = (props: ICommentComponent) => {
    const { comment } = props;
    const { name, body, email } = comment;
    useLogger({componentName: 'Comment'});

    return (
        <article className="c-comment">
            <h3 className="c-comment__title">{name}</h3>
            <p className="c-comment__body">{body}</p>
            <small className="c-comment__author">
                by <a href={`mailto:${email}`} className="c-comment__email">
                    {email}
                </a>
            </small>
        </article>
    )
};

export default Comment;