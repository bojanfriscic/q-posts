import { createContext } from 'react';
import { IPost } from '../../../../core/interfaces/IPost';

interface INewPostContext extends IPost {
    setUserId: (n: number | null) => void;
    setId: (n: number) => void;
    setTitle: (s: string) => void;
    setBody: (s: string) => void;
}

const initialValue: INewPostContext = {
    userId: null,
    id: null,
    title: '',
    body: '',
    setUserId: (n: number | null) => {},
    setId: (n: number) => {},
    setTitle: (s: string) => {},
    setBody: (s: string) => {}
}

const NewPostContext = createContext<INewPostContext>(initialValue);

export { NewPostContext };