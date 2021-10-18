import { useContext, ChangeEvent } from 'react';
import { NewPostContext } from '../../../../modules/pages/AddPostPage/context/NewPostContext';
import styles from '../scss/AddPost.module.scss';

const PostFields = () => {
    const context = useContext(NewPostContext);
    const { title, body, setTitle, setBody } = context;
    const { 
        addPostComponent__input, 
        addPostComponent__label, 
        addPostComponent__textarea,
        addPostComponent__formGroup
    } = styles;

    const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        switch(e.target.name) {
            case 'title':
                setTitle(e.target.value);
                break;
            case 'body':
                setBody(e.target.value);
                break;
            default: 
                return;
        }
    };

    return (
        <>
            <div className={addPostComponent__formGroup}>
                <label htmlFor="post-title" className={addPostComponent__label}>
                    Title
                </label>
                <input 
                    type="text" 
                    id="post-title" 
                    name="title" 
                    className={addPostComponent__input}
                    value={title}
                    placeholder="Title"
                    onChange={e => handleOnChange(e)}
                />
            </div>
            <div className={addPostComponent__formGroup}>
                <label htmlFor="post-body" className={addPostComponent__label}>
                    Body
                </label>
                <textarea
                    id="post-body"
                    name="body"
                    className={addPostComponent__textarea}
                    value={body}
                    placeholder="Body"
                    onChange={e => handleOnChange(e)}
                />
            </div>
        </>
    )
};

export { PostFields };