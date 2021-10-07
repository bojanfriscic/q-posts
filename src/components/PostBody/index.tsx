import { useLogger } from '../../hooks/useLogger';

interface IPostBodyComponent {
    content: string;
}

const PostBody = (props: IPostBodyComponent) => {
    const { content } = props;
    useLogger({componentName: 'PostBody'});

    return (
        <div className="c-post-body">
            <p className="c-post-body__content">
                {content}
            </p>
        </div>
    );
};

export default PostBody;