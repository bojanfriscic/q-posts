import React from 'react';
import Header from '../../components/Header';
import Posts from '../../components/Posts';

const Layout: React.FunctionComponent = () => {
    return (
        <>
            <Header />
            <main>
                <Posts />
            </main>
        </>
    );
}

export default Layout;