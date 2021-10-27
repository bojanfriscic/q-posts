import { FC, useState, FormEvent, ChangeEvent } from 'react';
import { useAppDispatch } from '../../../core/store/hooks';
import { setUser } from '../../../core/store/slices/currentUserSlice';
import { useQuery } from 'react-query';
import { api } from '../../../core/api';
import { QUERY_KEYS } from '../../../core/enums/queryKeys';
import { Loading } from '../../../shared/components/Loading';
import { Error } from '../../../shared/components/Error';
import { Success } from '../../../shared/components/Success';
import userSelect from '../scss/userSelect.module.scss';

const UserSelect: FC = () => {
    const defaultSelected = -1;
    const [userId, setUserId] = useState(defaultSelected);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSuccessMessage, setIsSuccessMessage] = useState('');
    const dispatch = useAppDispatch();
    const { data, isLoading, isError } = useQuery(QUERY_KEYS.USERS, api.users.get);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (data && userId !== defaultSelected) {
            const selectedUser = data.find(user => user.id === userId);
            
            if (selectedUser) {
                const { id, name, username, email } = selectedUser;
                const payload = { id, name, username, email };

                dispatch(setUser({ ...payload }));
                setUserId(defaultSelected);
                setIsSuccess(true);
                setIsSuccessMessage(`User set to ${name} (${username})`);
            }

        }
    };

    const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
        if (isSuccess || isSuccessMessage) {
            setIsSuccess(false);
            setIsSuccessMessage('');
        }

        setUserId(+e.target.value);
    };

    const renderLoading = isLoading && <Loading message={'users'} />;

    const renderError = !isLoading && isError && <Error />;

    const renderForm = !isLoading && !isError && data && data.length > 0 && (
        <form 
            onSubmit={e => handleSubmit(e)}
            className={isSuccess ? userSelect.formHasMessage : ''}
        >
            <select
                className={userSelect.select}
                onChange={e => handleOnChange(e)}
                defaultValue={defaultSelected}
            >
                <option value={defaultSelected} disabled>Select an user</option>
                {data.map(user => (
                    <option key={user.id} value={user.id}>
                        {`${user.name} (${user.username})`}
                    </option>
                ))}
            </select>
            <button 
                type="submit"
                className={userSelect.button}
                disabled={userId === defaultSelected}
            >
                Select User
            </button>
        </form>
    );

    const renderNoUsers = !isLoading && !isError && data && data.length === 0 && (
        <Error message={'There are no users to load.'} />
    );

    const renderSuccess = isSuccess && isSuccessMessage && <Success message={isSuccessMessage} />;
    
    return (
        <>
            {renderLoading}
            {renderError}
            {renderForm}
            {renderNoUsers}
            {renderSuccess}
        </>
    );
}

export { UserSelect };