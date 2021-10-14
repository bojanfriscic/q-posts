import { FC } from 'react';
import styles from './scss/Container.module.scss';

const Container: FC = ({ children }) => {
    const { container } = styles;

    return (
        <div className={container}>
            {children}
        </div>
    );
}

export default Container;