import { useContext, ChangeEvent } from 'react';
import { NewPostContext } from "../../../../modules/pages/AddPostPage/context/NewPostContext";
import { IUser } from '../../../../core/interfaces/IUser';
import styles from '../scss/AddPost.module.scss';

interface IUserProps {
    users: Array<IUser>;
};

const UserSelect = (props: IUserProps) => {
    const { users } = props;

    const context = useContext(NewPostContext);
    const { userId, setUserId } = context;

    const { 
        addPostComponent__formGroup, 
        addPostComponent__label,
        addPostComponent__select
    } = styles;

    const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const id = +e.target.value; 
        setUserId(id);
    };

    const renderOptions = users && users.length > 0 
        ? (
            <>
                <option value={-1} disabled>Select an user</option>
                {users.map(user => (
                    <option key={user.id} value={user.id}>
                        {`${user.name} (${user.username})`}
                    </option>
                ))}
            </>
        ) 
        : <option>Loading users...</option>;

    return (
        <div className={addPostComponent__formGroup}>
            <label htmlFor="user-select" className={addPostComponent__label}>
                Select User
            </label>
            <select 
                id="user-select" 
                className={addPostComponent__select}
                onChange={handleOnChange}
                value={userId ? userId : -1}
            >
                {renderOptions}
            </select>
        </div>
    )
};

export { UserSelect }