import { ChangeEvent, useContext } from 'react';
import FilterContext from '../../context/FilterContext';

const Filter = () => {
    const { filterString, setFilterString } =  useContext(FilterContext);

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