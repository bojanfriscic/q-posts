import { FC } from 'react';
import styles from './scss/Error.module.scss';

const Error: FC = () => {
    const { errorComponent } = styles;

    return <div className={errorComponent}>There has been an error. Please try again.</div>
};

export default Error;