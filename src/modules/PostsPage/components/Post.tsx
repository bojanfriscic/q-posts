import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IPostArchiveItem } from '../../../core/interfaces/IPostArchiveItem';
import { ROUTES } from '../../../core/enums/routes';
import postComponent from '../scss/Post.module.scss';

const Post: FC<IPostArchiveItem> = props => {
    const { id, title, author, numComments } = props;
    
    return (
        <article className={postComponent.base}>
            <h3 className={postComponent.heading}>
                <Link to={`${ROUTES.SINGLE_POST}/${id}`} className={postComponent.heading__link}>
                    {title}
                </Link>
            </h3>
            <div className={postComponent.meta}>
                <div>
                    by <span className={postComponent.author}>{author}</span>
                    <span className={postComponent.commentsBadge}>{numComments}</span>
                </div>
                <Link to={`${ROUTES.SINGLE_POST}/${id}`} className={postComponent.heading__link}>
                    Read more &raquo;
                </Link>
            </div>
        </article>
    );
};

export { Post };