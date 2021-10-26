import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../enums/routes';
import { useAppSelector } from '../../store/hooks';
import { Container } from '../../hoc/Container';
import header from './scss/Header.module.scss';

const Header: FC = () => {
    const currentUser = useAppSelector(state => state.currentUser);

    const renderCurrentUserLabel = currentUser.id 
        ? currentUser.username  
        : 'User Select';

    return (
        <header className={header.element}>
            <Container>
                <nav className={header.nav}>
                    <Link to={ROUTES.BASE_URL} className={header.brandLink}>
                        Q Posts
                    </Link>
                    <Link to={ROUTES.USER_SELECT} className={header.navLink}>
                        {renderCurrentUserLabel}
                    </Link>
                </nav>
            </Container>
        </header>
    );
};

export default Header;