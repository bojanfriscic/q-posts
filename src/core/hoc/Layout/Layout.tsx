import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from '../Routes';
import { Container } from '../Container';
import { Header } from '../../components/Header';

const Layout: FC = () => {
    return (
        <Router>
            <Header />
            <main>
                <Container>
                    <Routes />
                </Container>
            </main>
        </Router>
    );
};

export default Layout;