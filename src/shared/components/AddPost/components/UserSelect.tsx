import { useContext, ChangeEvent } from 'react';
import { NewPostContext } from "../../../../modules/pages/AddPostPage/context/NewPostContext";
import { IUser } from '../../../../core/interfaces/IUser';

interface IUserProps {
    users: Array<IUser>;
};

const UserSelect = (props: IUserProps) => {
    const { users } = props;
    const context = useContext(NewPostContext);
    const { setUserId } = context;

    const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const id = +e.target.value; 
        setUserId(id);
    };

    const renderOptions = users && users.length > 0 
        ? (
            <>
                <option value={undefined} disabled>Select an user</option>
                {users.map(user => (
                    <option key={user.id} value={user.id}>
                        {`${user.name} (${user.username})`}
                    </option>
                ))}
            </>
        ) 
        : <option>Loading users...</option>;

    return (
        <div>
            <label htmlFor="user-select">Select User</label>
            <select id="user-select" onChange={handleOnChange}>
                {renderOptions}
            </select>
        </div>
    )
};

export { UserSelect }