import { ChangeEvent, FC, useContext } from 'react';
import { FilterContext } from '../../context/FilterContext';
import styles from './scss/Filter.module.scss'

const Filter: FC  = () => {
    const { filter, setFilter } = useContext(FilterContext);
    const { filterComponent, filterComponent__input } = styles;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    };

    return (
        <section className={filterComponent}>
            <input
                type="text"
                placeholder="Filter posts by title"
                className={filterComponent__input}
                value={filter}
                onChange={e => handleChange(e)}
            />
        </section>
    );
};

export default Filter;