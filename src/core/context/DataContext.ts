import { createContext } from 'react';
import { IDataContext } from '../interfaces/IData';

const initialValues = {
    data: [],
    isLoading: true,
    hasError: false
};

const DataContext = createContext<IDataContext>(initialValues);

export { DataContext };