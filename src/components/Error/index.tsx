import { useLogger } from '../../hooks/useLogger';

const Error = () => {
    useLogger({componentName: 'Error'});

    return (
        <div className="c-error">
            Something went wrong...
        </div>
    );
}

export default Error;