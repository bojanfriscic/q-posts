import { FC } from 'react';
import { IComment } from '../../../core/interfaces/IComment';
import commentComponent from '../scss/Comment.module.scss';

const Comment: FC<IComment> = props => {
    const { name, email, body } = props;

    return (
        <article className={commentComponent.base}>
            <h3 className={commentComponent.heading}>{name}</h3>
            <p className={commentComponent.body}>{body}</p>
            <span className={commentComponent.meta}>
                by <a href={`mailto:${email}`} className={commentComponent.meta__author}>
                        {email}
                    </a>
            </span>
        </article>
    )
};

export { Comment }