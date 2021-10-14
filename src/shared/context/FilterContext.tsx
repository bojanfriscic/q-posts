import { createContext } from 'react';
import { IFilter } from '../interfaces/IFilter';

const initialValues: IFilter = {
    filter: '',
    setFilter: (s: string) => {}
};

const FilterContext = createContext<IFilter>(initialValues);

export { FilterContext };
