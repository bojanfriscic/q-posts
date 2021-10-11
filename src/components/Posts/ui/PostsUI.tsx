import { IData } from '../../../interfaces/IData';
import { useLogger } from '../../../hooks/useLogger';
import Loading from '../../Loading';
import Post from '../../Post';

interface IPostsUIComponent {
    data: Array<IData>;
    isLoading: boolean;
    isFiltering: boolean;
};

const PostsUI = (props: IPostsUIComponent) => {
    const { data, isLoading, isFiltering } = props;
    useLogger({componentName: 'PostsUI'});

    const renderLoading = isLoading && <Loading />;

    const renderData = !isLoading && data.map((post: IData) => (
        <Post 
            key={post.id}
            id={post.id} 
            title={post.title} 
            author={post.author} 
            numComments={post.numComments} 
        />
    ));

    const renderNoPosts = !isLoading && !isFiltering && data.length === 0 && (
        <p>There are no posts to display</p>
    );

    return (
        <section className="c-posts">
            {renderLoading}
            {renderData}
            {renderNoPosts}
        </section>
    );
};

export default PostsUI;