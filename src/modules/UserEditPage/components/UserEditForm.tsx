import { FC, useState, ChangeEvent, FormEvent } from 'react';
import { useAppDispatch } from '../../../core/store/hooks';
import { updateUser } from '../../../core/store/thunks/usersThunk';
import { setUser } from '../../../core/store/slices/currentUserSlice';
import { ICurrentUser } from '../../../core/interfaces/ICurrentUser';
import { Input } from '../../../shared/components/Input';
import { Error } from '../../../shared/components/Error';
import userEditForm from '../scss/userEditForm.module.scss';
import { Success } from '../../../shared/components/Success';

interface IUserEditFormProps {
    currentUser: ICurrentUser;
};

const UserEditForm: FC<IUserEditFormProps> = props => {
    const { currentUser } = props;
    const dispatch = useAppDispatch();
    const [isLocked, setIsLocked] = useState(true);
    const [formData, setFormData] = useState<ICurrentUser>(currentUser);
    const [isInvalid, setIsInvalid] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailure, setIsFailure] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsInvalid(false);
        setIsSuccess(false);
        setIsFailure(false);

        if (formData.name && formData.username && formData.email) {
            const response = await dispatch(updateUser({...formData}));
            if (response.meta.requestStatus === 'fulfilled') {
                dispatch(setUser({...formData}));
                setIsLocked(true);
                setIsSuccess(true);
            } else {
                setIsFailure(true);
            }
        } else {
            setIsInvalid(true);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsInvalid(false);
        setIsSuccess(false);
        setIsFailure(false);

        const { name, value } = e.target;
        
        setFormData({ 
            ...formData,
            [name]: value
        });
    };

    const handleIsLocked = () => {
        setIsLocked(!isLocked);
    };

    const nameProps = {
        type: 'text',
        name: 'name',
        value: formData.name,
        onChange: handleChange,
        disabled: isLocked,
    };

    const userNameProps = {
        type: 'text',
        name: 'username',
        value: formData.username,
        onChange: handleChange,
        disabled: isLocked,
    };

    const emailProps = {
        type: 'email',
        name: 'email',
        value: formData.email,
        onChange: handleChange,
        disabled: isLocked,
    };

    const renderForm = (
        <form 
            className={isInvalid || isSuccess || isFailure ? userEditForm.formHasMessage : ''}
            onSubmit={e => handleSubmit(e)}
        >
            <div className={userEditForm.formGroup}>
                <Input {...nameProps} />    
            </div>
            <div className={userEditForm.formGroup}>
                <Input {...userNameProps}  />    
            </div>
            <div className={userEditForm.formGroup}>
                <Input {...emailProps} />    
            </div>
            <button type="submit" className={userEditForm.button} disabled={isLocked}>Update Profile</button>
            <button type="button" onClick={() => handleIsLocked()} className={userEditForm.button}>
                {isLocked ? 'Unlock' : 'Lock'}
            </button>
        </form>
    );

    const renderInvalidFormError = isInvalid && <Error message={'All fields are required.'} />
    const renderSuccess = isSuccess && <Success message={'Profile updated!'} />;
    const renderRequestError = isFailure && <Error message={'There has been an error, please try again.'} />;

    return (
        <>
            {renderForm}
            {renderInvalidFormError}
            {renderSuccess}
            {renderRequestError}
        </>
    );
};

export { UserEditForm };