import { FC } from 'react';
import { useState } from 'react';
import { NewPostContext } from './context/NewPostContext';
import { AddPost } from '../../../shared/components/AddPost';

const AddPostsPage: FC = () => {
    const [userId, setUserId] = useState<number | null>(null);
    const [id, setId] = useState<number | null>(null);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const initialValue = {
        userId,
        id,
        title,
        body,
        setUserId,
        setId,
        setTitle,
        setBody
    };

    return (
        <div>
            <h1>Add a new Post</h1>
            <NewPostContext.Provider value={initialValue}>
                <AddPost />
            </NewPostContext.Provider>
        </div>
    );
};

export default AddPostsPage;