import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { api } from '../../config/api';
import { IData } from '../../interfaces/IData';
import { IPost } from '../../interfaces/IPost';
import { IUser } from '../../interfaces/IUser';
import { IComment } from '../../interfaces/IComment';

const Posts: React.FunctionComponent = () => {
    const [data, setData] = useState<Array<IData>>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [users] = useFetch<IUser>(api.users);
    const [posts] = useFetch<IPost>(api.posts);
    const [comments] = useFetch<IComment>(api.comments);

    useEffect(() => {
        const temp = [] as IData[];

        posts.forEach(post => {
            const { id, userId } = post;
            const authorData = users.find(user => user.id === id);
            const author = `${authorData?.username} (${authorData?.name})`;
            const numComments = comments.filter(comment => comment.id === userId).length
            
            temp.push(
                {
                    ...post,
                    numComments,
                    author
                }
            );
        });

        setData(temp);
        setIsLoading(false);
    }, [posts, users, comments]);


    return (
        <section>
            { data.map((post: IData) => (
                <article key={post.id}>
                    <h2>{post.title}</h2>
                    <small>by {post.author}</small>
                    <small>Comments: {post.numComments}</small>
                    <hr />
                </article>
            )) }
        </section>
    )
};

export default Posts;