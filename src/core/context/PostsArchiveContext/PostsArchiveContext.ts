import { createContext } from 'react';
import { IInitialState } from '../../interfaces/IInitialState';
import { IPostArchiveItem } from '../../interfaces/IPostArchiveItem';
import { REQUEST_STATUS } from '../../enums/requestStatus';

const initialValue: IInitialState<IPostArchiveItem> = {
    data: [],
    status: REQUEST_STATUS.INACTIVE,
    error: null
};

const PostsArchiveContext = createContext<IInitialState<IPostArchiveItem>>(initialValue);

export { PostsArchiveContext };