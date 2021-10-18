import { useContext, ChangeEvent } from 'react';
import { NewPostContext } from '../../../../modules/pages/AddPostPage/context/NewPostContext';

const PostFields = () => {
    const context = useContext(NewPostContext);
    const { title, body, setTitle, setBody } = context;

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
            <div>
                <label htmlFor="post-title"></label>
                <input 
                    type="text" 
                    id='post-title' 
                    name="title" 
                    value={title}
                    onChange={e => handleOnChange(e)}
                />
            </div>
            <div>
                <label htmlFor="post-body"></label>
                <textarea
                    id='post-body'
                    name="body"
                    value={body}
                    onChange={e => handleOnChange(e)}
                />
            </div>
        </>
    )
};

export { PostFields };