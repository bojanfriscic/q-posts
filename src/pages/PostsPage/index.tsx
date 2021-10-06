import { useState } from 'react';
import FilterContext from '../../context/FilterContext';
import Filter from '../../components/Filter';
import Posts from '../../components/Posts';

const PostsPage = () => {
    const [filterString, setFilterString] = useState('');
    const value = { filterString, setFilterString };

    return (
        <FilterContext.Provider value={value}>
            <Filter />
            <Posts filter={filterString} />
        </FilterContext.Provider>
    );
};

export default PostsPage;