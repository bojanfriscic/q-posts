import { useContext } from 'react';
import { SinglePostContext } from '../context/SinglePostContext';
import singlePostPage from '../scss/SinglePostPage.module.scss';

const PostEditForm = () => {
    const context = useContext(SinglePostContext);
    const { title, body, userId, users, handleSubmit, handleOnChange, handleUpdatePostData } = context;

    return (
        <form onSubmit={handleSubmit}>
            <div className={singlePostPage.formGroup}>
                <input 
                    type="text" 
                    name="title" 
                    value={title} 
                    onChange={e => handleUpdatePostData(e)} 
                    className={singlePostPage.input}
                />
            </div>
            <div className={singlePostPage.formGroup}>
                <select
                    value={userId ? userId : -1}
                    className={singlePostPage.select}
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
            <div className={singlePostPage.formGroup}>
                <textarea 
                    name="body" 
                    rows={12}
                    value={body} 
                    onChange={e => handleUpdatePostData(e)} 
                    className={singlePostPage.textarea}
                />
            </div>
            <button type="submit" className={singlePostPage.submitButton}>Save</button>
        </form>
    )
};

export { PostEditForm };