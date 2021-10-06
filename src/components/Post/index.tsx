interface IPostComponent {
    id: number;
    title: string;
    author: string;
    numComments: number;
};

const Post = (props: IPostComponent) => {
    const { id, title, author, numComments } = props;

    return (
        <article key={id}>
            <h2>{title}</h2>
            <small>by {author}</small>
            <small>Comments: {numComments}</small>
            <hr />
        </article>
    )
};

export default Post;