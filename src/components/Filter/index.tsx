import { ChangeEvent, useContext } from 'react';
import FilterContext from '../../context/FilterContext';
import { useLogger } from '../../hooks/useLogger';

const Filter = () => {
    const { filterString, setFilterString } =  useContext(FilterContext);
    useLogger({componentName: 'Filter'});

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilterString(e.target.value);
    };

    return (
        <section className="c-filter">
            <input 
                onChange={handleOnChange} 
                value={filterString} 
                type="text" 
                className="c-filter__input" 
                placeholder="Filter posts by title" 
            />
            <hr />
        </section>
    )
};

export default Filter;