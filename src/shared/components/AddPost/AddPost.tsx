import { FC, useState, useEffect, useContext, FormEvent } from 'react';
import { useMutation } from 'react-query';
import { api } from '../../../core/api';
import { useQueryClient } from 'react-query';
import { DataContext } from '../../../core/context/DataContext';
import { NewPostContext } from '../../../modules/pages/AddPostPage/context/NewPostContext';
import { IUser } from '../../../core/interfaces/IUser';
import { IPost } from '../../../core/interfaces/IPost';
import { MESSAGE_TYPE } from './model/enums';
import { QUERY_KEYS } from '../../../core/enums/QueryKeysEnum';
import { AddPostUI } from './components/AddPostUI';

const AddPost: FC = () => {
    const queryClient = useQueryClient();
    const cachedUsers: Array<IUser> | undefined = queryClient.getQueryData(QUERY_KEYS.USERS);

    const newPostContext = useContext(NewPostContext);
    const { userId, title, body, setUserId, setTitle, setBody } = newPostContext;

    const dataContext = useContext(DataContext);
    const { data } = dataContext;

    const [users, setUsers] = useState<Array<IUser>>([]);
    const [id] = useState(Math.floor(Math.random() * (200 - 100) + 100));
    const [hasDataError, setHasDataError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

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
            setIsSuccess(true);
        }
    });

    const validate = (obj: IPost) => {
        const { id, userId, title, body } = obj;
        setHasDataError(false);


        if (!id || !userId || !title || !body) {
            setHasDataError(true);
            return false;
        }

        return true;
    };

    const clearForm = () => {
        setUserId(null);
        setTitle('');
        setBody('');
    };

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsSuccess(false);

        if (validate(reqObject)) {
            mutate(reqObject);
            clearForm();
        }
        
    };

    const handleCloseMessage = (id: string) => {
        switch(id) {
            case MESSAGE_TYPE.ERROR:
                setHasDataError(false);
                break;
            case MESSAGE_TYPE.SUCCESS:
                setIsSuccess(false);
                break;
            default:
                return;
        }
    };

    const uiProps = {
        users,
        hasDataError,
        isLoading,
        isSuccess,
        handleOnSubmit,
        clearForm,
        handleCloseMessage
    };

    return <AddPostUI {...uiProps} />;
};

export default AddPost;