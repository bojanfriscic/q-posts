import React from 'react';
import { IData } from '../interfaces/IData';

const DataContext = React.createContext({
    data: [] as Array<IData>,
    isLoading: true,
});

export default DataContext;