import { ChangeEvent, FC, useContext } from 'react';
import { PostsArchiveContext } from '../../../core/context/PostsArchiveContext/PostsArchiveContext';
import filterComponent from '../scss/Filter.module.scss';

const Filter: FC = () => {
    const context = useContext(PostsArchiveContext);
    const { filter, setFilter } = context;

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    };

    return (
        <section className={filterComponent.base}>
            <h2>Filter posts by title</h2>
            <input 
                type="text"
                placeholder="Filter posts"
                className={filterComponent.input}
                value={filter}
                onChange={e => handleOnChange(e)}
            />
        </section>
    );
};

export { Filter };