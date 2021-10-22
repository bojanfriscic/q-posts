import { IPost } from './IPost';

export interface IPostArchiveItem extends IPost {
    author: string;
    numComments: number;
};