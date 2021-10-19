import { FormEvent } from 'react';
import { IUser } from '../../../../core/interfaces/IUser';
import { MESSAGE_TYPE } from '../model/enums';
import { UserSelect } from './UserSelect';
import { PostFields } from './PostFields';
import styles from '../scss/AddPost.module.scss';

interface IAddPostUIProps {
    users: Array<IUser>;
    hasDataError: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    isFailure: boolean;
    handleOnSubmit: (e: FormEvent<HTMLFormElement>) => void;
    clearForm: () => void;
    handleCloseMessage: (s: string) => void;
};

const AddPostUI = (props: IAddPostUIProps) => {
    const { 
        users, 
        hasDataError, 
        isLoading,
        isSuccess,
        isFailure,
        handleOnSubmit,
        clearForm,
        handleCloseMessage
    } = props;

    const { 
        addPostComponent__messageError, 
        addPostComponent__messageSuccess,
        addPostComponent__buttonSubmit,
        addPostComponent__buttonClear,
    } = styles;

    const renderForm = !isLoading && 
        <form onSubmit={handleOnSubmit}>
            <UserSelect users={users} />
            <PostFields />
            <div>
                <button 
                    className={addPostComponent__buttonSubmit} 
                    type="submit"
                >
                    Add Post
                </button>
                <button 
                    className={addPostComponent__buttonClear} 
                    type="button" 
                    onClick={() => clearForm()}
                >
                    Clear Form
                </button>
            </div>
        </form>;

    const renderLoading = isLoading && <p>Saving your changes...</p>;

    const renderError = hasDataError 
        && <p 
                onClick={() => handleCloseMessage(MESSAGE_TYPE.ERROR)}
                className={addPostComponent__messageError}
            >
                Please fill in all fields.
            </p>;

    const renderSuccess = isSuccess 
        && <p 
                onClick={() => handleCloseMessage(MESSAGE_TYPE.SUCCESS)}
                className={addPostComponent__messageSuccess}
            >
                Success! Your post has been added.
            </p>;

    const renderFailure = isFailure 
        &&  <p 
                onClick={() => handleCloseMessage(MESSAGE_TYPE.FAILURE)}
                className={addPostComponent__messageError}
            >
                There has been an error, your post wasn't added.
            </p>

    return (
        <>
            {renderForm}
            {renderLoading}
            {renderError}
            {renderSuccess}
            {renderFailure}
        </>
    );
};

export { AddPostUI }