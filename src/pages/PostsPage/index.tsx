import { useState } from 'react';
import FilterContext from '../../context/FilterContext';
import { useLogger } from '../../hooks/useLogger';
import Container from '../../hoc/Container';
import Filter from '../../components/Filter';
import Posts from '../../components/Posts';

const PostsPage = () => {
    const [filterString, setFilterString] = useState('');
    const value = { filterString, setFilterString };
    useLogger({ componentName: 'PostsPage' });

    return (
        <FilterContext.Provider value={value}>
            <Container>
                <Filter />
                <Posts filter={filterString} />
            </Container>
        </FilterContext.Provider>
    );
};

export default PostsPage;