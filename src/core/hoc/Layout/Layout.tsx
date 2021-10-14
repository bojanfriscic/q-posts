import { FC } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

const Layout: FC = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;