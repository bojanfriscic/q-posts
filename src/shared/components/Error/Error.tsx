import { FC } from 'react';
import errorComponent from './scss/Error.module.scss';

interface IErrorProps {
    message?: string | null;
};

const Error: FC<IErrorProps> = props => {
    const { message } = props;

    return (
        <div className={errorComponent.base}>
            {message !== null ? message : 'An error occured, please try again.'}
        </div>
    );
};

export default Error;