import { FC, useState, useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';
import { api } from '../../api';
import { IDataObject } from '../../interfaces/IData';
import { IPost } from '../../interfaces/IPost';
import { IComment } from '../../interfaces/IComment';
import { IUser } from '../../interfaces/IUser';
import { DataContext } from '../../context/DataContext';

const DataContextProvider: FC = ({ children }) => {
    const [data, setData] = useState<Array<IDataObject>>([]);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const { data: posts, isLoading: postsLoading, isError: postsError } = useQuery<Array<IPost>>('posts', api.getPosts);
    const hasPosts = posts !== undefined && !postsLoading;
    const postsDep = useMemo(() => {
        return {
            data: posts,
            hasData: hasPosts,
            hasError: postsError
        };
    }, [posts, hasPosts, postsError]);

    const { data: users, isLoading: usersLoading, isError: usersError } = useQuery<Array<IUser>>('users', api.getUsers, {
        enabled: !!hasPosts
    });
    const hasUsers = users !== undefined && !usersLoading;
    const usersDep = useMemo(() => {
        return {
            data: users,
            hasData: hasUsers,
            hasError: usersError
        };
    }, [users, hasUsers, usersError]);

    const { data: comments, isLoading: commentsLoading, isError: commentsError } = useQuery<Array<IComment>>('comments', api.getComments, {
        enabled: !!hasPosts && !!hasUsers
    });
    const hasComments = comments !== undefined && !commentsLoading;
    const commentsDep = useMemo(() => {
        return {
            data: comments,
            hasData: hasComments,
            hasError: commentsError
        };
    }, [comments, hasComments, commentsError])

    useEffect(() => {
        if (postsDep.hasData && usersDep.hasData && commentsDep.hasData) {
            const tempData = [] as Array<IDataObject>;

            postsDep.data && postsDep.data.forEach(post => {
                const { id, userId } = post;
                let author: string;
                let numComments: number;

                const user = usersDep.data && usersDep.data.find(user => user.id === userId);
                
                if (user) {
                    const { name, username } = user;
                    author = `${username} (${name})`;
                } else {
                    author = 'Unknown author';
                }

                const postComments = commentsDep.data && commentsDep.data.filter(comment => comment.postId === id);
                numComments = postComments && postComments.length !== 0
                    ? postComments.length
                    : 0;

                tempData.push({
                    ...post,
                    author,
                    numComments
                });
            });

            setData(tempData);
            setIsLoading(false);
        }

        if (postsDep.hasError || usersDep.hasError || commentsDep.hasError) {
            setHasError(true);
            setIsLoading(false);
        }
    }, [postsDep, commentsDep, usersDep])

    const contextData = {
        data,
        isLoading,
        hasError
    };

    return (
        <DataContext.Provider value={contextData}>
            {children}
        </DataContext.Provider>
    )
};

export default DataContextProvider;