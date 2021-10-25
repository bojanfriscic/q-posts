import { createContext } from 'react';
import { IInitialState } from '../../interfaces/IInitialState';
import { IPostArchiveItem } from '../../interfaces/IPostArchiveItem';
import { REQUEST_STATUS } from '../../enums/requestStatus';
interface PostsArchiveContextValue extends IInitialState<IPostArchiveItem> {
    filter: string;
    setFilter: (s: string) => void;
}

const initialValue: PostsArchiveContextValue = {
    data: [],
    status: REQUEST_STATUS.INACTIVE,
    error: null,
    filter: '',
    setFilter: s => {} 
};

const PostsArchiveContext = createContext<PostsArchiveContextValue>(initialValue);

export { PostsArchiveContext };