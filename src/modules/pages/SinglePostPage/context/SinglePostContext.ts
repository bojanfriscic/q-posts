import { createContext } from 'react';
import { ISinglePostContext } from '../model/interfaces';

const initialValue: ISinglePostContext = {
    id: null,
    title: '',
    body: '',
    author: '',
    userId: null,
    users: [],
    handleSubmit: e => {},
    handleOnChange: e => {},
    handleUpdatePostData: e => {},
    handleCloseMessage: s => {},
    isEditMode: false,
    setIsEditMode: b => {}
};

const SinglePostContext = createContext(initialValue);

export { SinglePostContext };
