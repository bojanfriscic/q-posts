import React, { useState } from 'react';
import FilterContext from '../../context/FilterContext';
import Header from '../../components/Header';
import Filter from '../../components/Filter';
import Posts from '../../components/Posts';

const Layout: React.FunctionComponent = () => {
    const [filterString, setFilterString] = useState('');
    const value = { filterString, setFilterString };

    return (
        <>
            <Header />
            <main>
                <FilterContext.Provider value={value}>
                    <Filter />
                    <Posts filter={filterString} />
                </FilterContext.Provider>
            </main>
        </>
    );
}

export default Layout;