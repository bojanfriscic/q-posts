import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../modules/navigation/enums/RoutesEnum';
import { Container } from '../../hoc/Container';
import styles from './scss/Header.module.scss';

const Header: FC = () => {
    const { header, header__nav, header__navLink } = styles;

    return (
        <header className={header}>
            <Container>
                <nav className={header__nav}>
                    <Link to={ROUTES.BASE_URL} className={header__navLink}>Q Posts Fetcher</Link>
                    <Link to={ROUTES.ADD_POST} className={header__navLink}>Add Post</Link>
                </nav>
            </Container>
        </header>
    );
};

export default Header;