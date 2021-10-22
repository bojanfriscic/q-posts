import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../enums/routes';
import { Container } from '../../hoc/Container';
import header from './scss/Header.module.scss';

const Header: FC = () => {
    
    return (
        <header className={header.element}>
            <Container>
                <Link to={ROUTES.BASE_URL} className={header.link}>
                    Q Posts
                </Link>
            </Container>
        </header>
    );
};

export default Header;