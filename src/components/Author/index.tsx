import { useLogger } from '../../hooks/useLogger';

interface IAuthorComponent {
    name: string;
};

const Author = (props: IAuthorComponent) => {
    const { name } = props;
    useLogger({componentName: 'Author'});

    return (
        <span className="c-author">by {name}</span>
    )
};

export default Author;