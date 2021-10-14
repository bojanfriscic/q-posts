import { FC, useState } from 'react';
import { FilterContext } from '../../../shared/context/FilterContext';
import { Filter } from '../../../shared/components/Filter';

const PostsPage: FC = () => {
    const [filter, setFilter] = useState('');

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            <Filter />
        </FilterContext.Provider>
    );
};

export default PostsPage;