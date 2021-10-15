import styles from './scss/Comment.module.scss';

interface ICommentProps {
    name: string;
    email: string;
    body: string;
};

const Comment = (props: ICommentProps) => {
    const { name, email, body } = props;
    const { commentComponent } = styles;

    return (
        <article className={commentComponent}>
            <h3>{name}</h3>
            <p>{body}</p>
            <span>
                by <a href={`mailto:${email}`}>{email}</a>
            </span>
        </article>
    )
};

export default Comment;