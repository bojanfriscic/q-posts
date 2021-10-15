import { useState, FormEvent, ChangeEvent} from 'react';
import { IComment } from '../../../core/interfaces/IComment';

interface IAddCommentProps {
    setShowAddForm: (v: boolean) => void;
    postId: number;
} 

/*
    There is no POST comments endpoint -> mutation part missing
*/

const AddComment = (props: IAddCommentProps) => {
    const { setShowAddForm, postId } = props;

    /*
        We're using a mock API (data doesn't persist) with 500 comments
        The mock ID should be larger than 500
    */
    const blankComment = {
        postId,
        id: Math.floor(Math.random() * (600 - 500) + 500),
        name: '',
        email: '',
        body: ''
    };
    const [fields, setFields] = useState<IComment>(blankComment)

    // const { isLoading, mutate } = useMutation()

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(fields);
        // mutate function here
    };

    const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFields({ ...fields, [name]: value });
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <div>
                <input 
                    type="text" 
                    name="name"
                    value={fields.name}
                    onChange={e => handleOnChange(e)}
                />
            </div>
            <div>
                <input 
                    type="email" 
                    name="email" 
                    value={fields.email}
                    onChange={e => handleOnChange(e)}
                />
            </div>
            <div>
                <textarea 
                    name="body" 
                    value={fields.body}
                    onChange={e => handleOnChange(e)}
                />
            </div>
            <button type="submit">Add</button>
            <button type="button" onClick={() => setShowAddForm(false)}>Cancel</button>
        </form>
    );
};

export default AddComment;