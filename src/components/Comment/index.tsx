import { IComment } from '../../interfaces/IComment';

interface ICommentComponent {
    comment: IComment
}

const Comment = (props: ICommentComponent) => {
    const { comment } = props;
    const { name, body, email } = comment;

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