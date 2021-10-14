import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Container } from '../Container';
import { Routes } from '../../../modules/navigation/components/Routes';

const Layout: FC = () => {
    return (
        <Router>
            <Header />
            <main>
                <Container>
                    <Routes />
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

export default Layout;