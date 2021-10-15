import { FC, useState } from 'react';
import { FilterContext } from '../../../shared/context/FilterContext';
import { Filter } from '../../../shared/components/Filter';
import { Posts } from '../../../shared/components/Posts';

const PostsPage: FC = () => {
    const [filter, setFilter] = useState('');

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            <Filter />
            <Posts />
        </FilterContext.Provider>
    );
};

export default PostsPage;