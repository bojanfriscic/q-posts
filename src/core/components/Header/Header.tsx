import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../enums/routes';
import { useAppSelector } from '../../store/hooks';
import { Container } from '../../hoc/Container';
import header from './scss/Header.module.scss';

const Header: FC = () => {
    const currentUser = useAppSelector(state => state.currentUser);

    const renderBrandLink = (
        <Link to={ROUTES.BASE_URL} className={header.brandLink}>
            Q Posts
        </Link>
    );

    const renderUserSelect = (
        <Link to={ROUTES.USER_SELECT} className={header.navLink}>
            {currentUser.id ? currentUser.username : 'User Select'}
        </Link>
    );

    const renderEditLink = currentUser.id && (
        <Link to={ROUTES.USER_EDIT} className={header.navLink}>
            Edit Profile
        </Link>
    );

    return (
        <header className={header.element}>
            <Container>
                <nav className={header.nav}>
                    {renderBrandLink}
                    <div>
                        {renderUserSelect}
                        {renderEditLink}
                    </div>
                </nav>
            </Container>
        </header>
    );
};

export default Header;