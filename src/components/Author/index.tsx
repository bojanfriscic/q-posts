import { useLogger } from '../../hooks/useLogger';

interface IAuthorComponent {
    name: string;
};

const Author = (props: IAuthorComponent) => {
    const { name } = props;
    useLogger({componentName: 'Author'});

    return (
        <small className="c-author">by {name}</small>
    )
};

export default Author;