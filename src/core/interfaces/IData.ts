import { IPost } from './IPost'

export interface IDataObject extends IPost {
    author: string;
    numComments: number;
};

export interface IDataContext {
    data: Array<IDataObject>;
    isLoading: boolean;
    hasError: boolean;
};