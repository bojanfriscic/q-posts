import { useLogger } from '../../hooks/useLogger';

const Loading = () => {
    useLogger({componentName: 'Loading'});

    return (
        <div className="c-loading">
            Loading...
        </div>
    );
};

export default Loading;