import { Link } from 'react-router-dom';
import { ROUTES } from '../../../modules/navigation/enums/RoutesEnum'
import { IDataObject } from '../../../core/interfaces/IData';
import styles from './scss/Post.module.scss';

const Post = (props: IDataObject) => {
    const { id, title, numComments, author } = props;
    const { 
        postComponent, 
        postComponent__link,
        postComponent__meta, 
        postComponent__author, 
        postComponent__commentsBadge,
    } = styles;

    return (
        <article className={postComponent}>
            <h2>
                <Link to={`${ROUTES.SINGLE_POST}/${id}`} className={postComponent__link}>
                    {title}
                </Link>
            </h2>
            <div className={postComponent__meta}>
                <span className={postComponent__author}>
                    by:&nbsp;<strong>{author}</strong>
                </span>
                <span className={postComponent__commentsBadge}>
                    {numComments}
                </span>
            </div>
        </article>
    );
};

export default Post;