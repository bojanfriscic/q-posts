import { FC, useState, useEffect, useContext, FormEvent } from 'react';
import { useMutation } from 'react-query';
import { api } from '../../../core/api';
import { useQueryClient } from 'react-query';
import { DataContext } from '../../../core/context/DataContext';
import { NewPostContext } from '../../../modules/pages/AddPostPage/context/NewPostContext';
import { IUser } from '../../../core/interfaces/IUser';
import { QUERY_KEYS } from '../../../core/enums/QueryKeysEnum';
import { UserSelect } from './components/UserSelect';
import { PostFields } from './components/PostFields';

const AddPost: FC = () => {
    const queryClient = useQueryClient();
    const cachedUsers: Array<IUser> | undefined = queryClient.getQueryData(QUERY_KEYS.USERS);

    const newPostContext = useContext(NewPostContext);
    const { userId, title, body } = newPostContext;

    const dataContext = useContext(DataContext);
    const { data } = dataContext;

    const [users, setUsers] = useState<Array<IUser>>([]);
    const [id] = useState(Math.floor(Math.random() * (200 - 100) + 100));

    const reqObject = {
        id,
        userId,
        title,
        body
    };

    useEffect(() => {
        if (cachedUsers && cachedUsers.length > 0) {
            setUsers(cachedUsers);
        }

    }, [data, cachedUsers]);

    const { isLoading, mutate } = useMutation(api.postPost, {
        onSuccess: () => {
            alert('Your post has been added.');
        }
    });

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate(reqObject);
    };

    const renderForm = !isLoading && 
        <form onSubmit={handleOnSubmit}>
            <UserSelect users={users} />
            <PostFields />
            <div>
                <button type="submit">Add Post</button>
            </div>
        </form>;

    const renderLoading = isLoading && <p>Saving your changes...</p>;

    return (
        <>
            {renderForm}
            {renderLoading}
        </>
    );
};

export default AddPost;