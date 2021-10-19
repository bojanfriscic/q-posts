import { useState, ChangeEvent, FormEvent } from 'react';
import { IComment } from '../../../../core/interfaces/IComment';
import { IUser } from '../../../../core/interfaces/IUser';
import { MESSAGE_TYPE } from '../model/enums';
import { Loading } from '../../../../shared/components/Loading';
import { Error } from '../../../../shared/components/Error';
import { Comment } from '../../../../shared/components/Comment';
import { AddComment } from '../../../../shared/components/AddComment';
import styles from '../scss/SinglePostPage.module.scss';

interface ISinglePostPageProps {
    id: number;
    title: string;
    body: string;
    userId: number | null;
    setUserId: (n: number | null) => void;
    author: string;
    comments: Array<IComment>;
    users: Array<IUser>;
    isPostLoading: boolean;
    hasPostError: boolean;
    isCommentsLoading: boolean;
    hasCommentsError: boolean;
    isEditMode: boolean;
    setIsEditMode: (b: boolean) => void;
    handleUpdatePostData: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    isPostSubmitting: boolean;
    isSubmittingFailure: boolean;
    isSubmittingSuccess: boolean;
    handleCloseMessage: (s: string) => void;
    handleOnChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const SinglePostPageUI = (props: ISinglePostPageProps) => {
    const [showAddForm, setShowAddForm] = useState(false);
    const { 
        singlePostPage__commentsHeading,
        singlePostPage__editModeToggle,
        singlePostPage__editModeToggleButton,
        singlePostPage__formGroup,
        singlePostPage__input,
        singlePostPage__select,
        singlePostPage__textarea,
        singlePostPage__submitButton,
        singlePostPage__messageSuccess,
        singlePostPage__messageFailure
    } = styles;

    const { 
        id,
        title, 
        body, 
        userId,
        author, 
        comments,
        users,
        isPostLoading, 
        hasPostError,
        isCommentsLoading,
        hasCommentsError,
        isEditMode,
        setIsEditMode,
        handleUpdatePostData,
        handleSubmit,
        isPostSubmitting,
        isSubmittingFailure,
        isSubmittingSuccess,
        handleCloseMessage,
        handleOnChange
    } = props;
    
    const renderPostLoading = isPostLoading && <Loading name='Post' />
    const renderPostError = !isPostLoading && hasPostError && <Error />;
    const renderPost = !isPostLoading && !hasPostError && (
        <>
            <h1>{title}</h1>
            <span>by {author}</span>
            <p>{body}</p>
        </>
    );

    const renderEditModeToggle = !isPostLoading && !hasPostError && (
        <div className={singlePostPage__editModeToggle}>
            <button 
                onClick={() => setIsEditMode(!isEditMode)}
                className={singlePostPage__editModeToggleButton}
            >
                {isEditMode ? 'Cancel' : 'Edit Post'}
            </button>
        </div>
    );

    const renderEditPost = !isPostLoading && !hasPostError && !isPostSubmitting && (
        <form onSubmit={handleSubmit}>
            <div className={singlePostPage__formGroup}>
                <input 
                    type="text" 
                    name="title" 
                    value={title} 
                    onChange={e => handleUpdatePostData(e)} 
                    className={singlePostPage__input}
                />
            </div>
            <div className={singlePostPage__formGroup}>
                <select
                    value={userId ? userId : -1}
                    className={singlePostPage__select}
                    onChange={e => handleOnChange(e)}
                >
                    <option value={-1} disabled>Select an user</option>
                    {users.map(user => (
                        <option key={user.id} value={user.id}>
                            {`${user.name} (${user.username})`}
                        </option>
                    ))}
                </select>
            </div>
            <div className={singlePostPage__formGroup}>
                <textarea 
                    name="body" 
                    rows={12}
                    value={body} 
                    onChange={e => handleUpdatePostData(e)} 
                    className={singlePostPage__textarea}
                />
            </div>
            <button type="submit" className={singlePostPage__submitButton}>Save</button>
        </form>
    );

    const renderSubmittingMessage = isPostSubmitting && <p>Saving your changes...</p>;

    const renderSuccess = isSubmittingSuccess 
        &&  <p 
                onClick={() => handleCloseMessage(MESSAGE_TYPE.SUCCESS)}
                className={singlePostPage__messageSuccess}
            >
                Success! Your post has been added.
            </p>;
    
    const renderFailure = isSubmittingFailure 
        &&  <p
                onClick={() => handleCloseMessage(MESSAGE_TYPE.SUCCESS)}
                className={singlePostPage__messageFailure}
            >
                There has been an error, your post wasn't updated.
            </p>

    const addCommentProps = {
        setShowAddForm,
        postId: id
    };
    const renderAddForm = showAddForm && <AddComment {...addCommentProps} />;
    const addButtonLabel = showAddForm ? 'Cancel' : 'Add Comment';

    const renderCommentsLoading = isCommentsLoading && <Loading name='Comments' />;
    const renderCommentsError = !isCommentsLoading && hasCommentsError && <Error />;
    const renderComments = !isPostLoading && !hasCommentsError && comments.map(comment => <Comment key={comment.id} {...comment} />)

    return (
        <>
            <section>
                {renderEditModeToggle}
                {renderPostLoading}
                {renderPostError}
                {isEditMode ? renderEditPost : renderPost}
                {renderSubmittingMessage}
                {renderSuccess}
                {renderFailure}
            </section>
            <hr />
            <section>
                <h2 className={singlePostPage__commentsHeading}>
                    Comments 
                    <button onClick={() => setShowAddForm(!showAddForm)}>
                        {addButtonLabel}
                    </button>
                </h2>

                {renderAddForm}
                {renderCommentsLoading}
                {renderCommentsError}
                {renderComments}
            </section>
        </>
    );
};

export { SinglePostPageUI };