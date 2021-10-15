import { FC } from 'react';
import styles from './scss/Loading.module.scss';

const Loading: FC = () => {
    const { loadingComponent } = styles;

    return <div className={loadingComponent}>Loading...</div>;
};

export default Loading;