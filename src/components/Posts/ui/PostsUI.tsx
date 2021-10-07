import { IData } from '../../../interfaces/IData';
import { useLogger } from '../../../hooks/useLogger';
import Loading from '../../Loading';
import Error from '../../Error';
import Post from '../../Post';

interface IPostsUIComponent {
    data: Array<IData>;
    isLoading: boolean;
};

const PostsUI = (props: IPostsUIComponent) => {
    const { data, isLoading } = props;
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

    const renderError = !isLoading && data.length === 0 && <Error />;

    return (
        <section className="c-posts">
            {renderLoading}
            {renderData}
            {renderError}
        </section>
    );
};

export default PostsUI;