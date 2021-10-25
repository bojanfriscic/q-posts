import { FC } from 'react';

interface ILoadingProps {
    message?: string | null;
};

const Loading: FC<ILoadingProps> = props => {
    const { message } = props;

    return (
        <div>
            Loading{ message ? ` ${message}` : ''}...
        </div>
    );
};

export default Loading;