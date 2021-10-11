import { useEffect, useState, useContext } from 'react';
import { useLogger } from '../../hooks/useLogger';
import { IData } from '../../interfaces/IData';
import PostsUI from './ui/PostsUI';
import DataContext from '../../context/DataContext';

interface IPostsComponent {
    filter: string;
};

const Posts = (props: IPostsComponent) => {
    const { filter } = props;
    const { data, isLoading } = useContext(DataContext);
    const [posts, setPosts] = useState<Array<IData>>([]);
    const [isFiltering, setIsFiltering] = useState(true);

    useLogger({componentName: 'Posts'});

    useEffect(() => {
        const filteredPosts = data.filter(post => post.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));

        setPosts(filteredPosts);
        setIsFiltering(false);
    }, [filter, data]);


    return (
        <PostsUI data={posts} isLoading={isLoading} isFiltering={isFiltering} />
    )
};

export default Posts;