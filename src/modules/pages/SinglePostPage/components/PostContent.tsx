import { FC, useContext } from 'react';
import { SinglePostContext } from '../context/SinglePostContext';

const PostContent: FC = () => {
    const context = useContext(SinglePostContext);
    const { title, body, author } = context;

    return (
        <>
            <h1>{title}</h1>
            <span>by {author}</span>
            <p>{body}</p>
        </>
    );
};

export { PostContent }