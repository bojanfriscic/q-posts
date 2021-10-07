import { Link } from 'react-router-dom';
import { useLogger } from '../../hooks/useLogger';
import Author from '../Author';

interface IPostComponent {
    id: number;
    title: string;
    author: string;
    numComments: number;
};

const Post = (props: IPostComponent) => {
    const { id, title, author, numComments } = props;
    useLogger({componentName: 'Post'});

    return (
        <article className="c-post">
            <h2 className="c-post__heading">
                <Link to={`/post/${id}`} className="c-post__link">
                    {title}
                </Link>
            </h2>
            <Author name={author} />
            <small className="c-post__comments">Comments: {numComments}</small>
            <hr />
        </article>
    )
};

export default Post;