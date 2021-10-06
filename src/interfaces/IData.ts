import { IPost } from "./IPost";

export interface IData extends IPost {
    numComments: number;
    author: string;
}