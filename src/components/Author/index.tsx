interface IAuthorComponent {
    name: string;
};

const Author = (props: IAuthorComponent) => {
    const { name } = props;

    return (
        <small className="c-author">by {name}</small>
    )
};

export default Author;