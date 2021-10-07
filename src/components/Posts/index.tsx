import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useLogger } from '../../hooks/useLogger';
import { api } from '../../config/api';
import { IData } from '../../interfaces/IData';
import { IPost } from '../../interfaces/IPost';
import { IUser } from '../../interfaces/IUser';
import { IComment } from '../../interfaces/IComment';
import PostsUI from './ui/PostsUI';

interface IPostsComponent {
    filter: string;
};

const Posts = (props: IPostsComponent) => {
    const { filter } = props;
    const [data, setData] = useState<Array<IData>>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [users] = useFetch<IUser>(api.users);
    const [posts] = useFetch<IPost>(api.posts);
    const [comments] = useFetch<IComment>(api.comments);

    useLogger({componentName: 'Posts'});

    useEffect(() => {
        const temp = [] as IData[];
        const filteredPosts = posts.filter(post => post.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));

        filteredPosts.forEach(post => {
            const { userId } = post;
            const authorData = users.find(user => user.id === post.userId);
            const author = `${authorData?.username} (${authorData?.name})`;
            const numComments = comments.filter(comment => comment.postId === userId).length
            
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
    }, [posts, users, comments, filter]);


    return (
        <PostsUI data={data} isLoading={isLoading} />
    )
};

export default Posts;