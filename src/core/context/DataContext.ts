import { createContext } from 'react';
import { IDataContext } from '../interfaces/IData';

const initialValues: IDataContext = {
    data: [],
    isLoading: true,
    hasError: false
};

const DataContext = createContext<IDataContext>(initialValues);

export { DataContext };