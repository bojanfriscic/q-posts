import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import DataContext from '../../context/DataContext';
import { api } from '../../config/api';
import { useLogger } from '../../hooks/useLogger';
import { useFetch } from '../../hooks/useFetch';
import { IData } from '../../interfaces/IData';
import { IPost } from '../../interfaces/IPost';
import { IUser } from '../../interfaces/IUser';
import { IComment } from '../../interfaces/IComment';
import Header from '../../components/Header';
import Routes from '../Routes';

const Layout: React.FunctionComponent = () => {
    const [data, setData] = useState<Array<IData>>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [users] = useFetch<IUser>(api.users);
    const [posts] = useFetch<IPost>(api.posts);
    const [comments] = useFetch<IComment>(api.comments);

    useLogger({ componentName: 'Layout' });

    useEffect(() => {
        const temp = [] as Array<IData>;

        if(posts.length >= 0) {
            posts.forEach(post => {
                if (post) {
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
                }
            });
            setData(temp);
        }

        if(posts.length >= 1) setIsLoading(false);
    }, [posts, users, comments]);

    return (
        <Router>
            <Header />
            <DataContext.Provider value={{ data, isLoading }}>
                <Routes />
            </DataContext.Provider>
        </Router>
    );
}

export default Layout;