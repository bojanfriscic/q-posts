import { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppSelector } from '../../core/store/hooks';
import { ROUTES } from '../../core/enums/routes';
import { UserEditForm } from './components/UserEditForm';
import userEditPage from './scss/userEditPage.module.scss';

const UserEditPage: FC = () => {
    const history = useHistory();
    const currentUser = useAppSelector(state => state.currentUser);

    useEffect(() => {
        if (!currentUser.id) history.push(ROUTES.POSTS);
    });

    return (
        <>
            <h1 className={userEditPage.heading}>
                Edit User: {`${currentUser.name} (${currentUser.username})`}
            </h1>
            <UserEditForm currentUser={currentUser} />
        </>
    )
};

export default UserEditPage;