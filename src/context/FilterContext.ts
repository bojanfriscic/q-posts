import React from 'react';

const FilterContext = React.createContext({
    filterString: '',
    setFilterString: (s: string) => {}
});

export default FilterContext;