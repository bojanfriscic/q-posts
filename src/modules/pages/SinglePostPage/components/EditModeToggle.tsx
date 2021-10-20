import { useContext, FC } from 'react';
import { SinglePostContext } from '../context/SinglePostContext';
import singlePostPage from '../scss/SinglePostPage.module.scss';

const EditModeToggle: FC = () => {
    const context = useContext(SinglePostContext);
    const { isEditMode, setIsEditMode } = context;

    return (
        <div className={singlePostPage.editModeToggle}>
            <button 
                onClick={() => setIsEditMode(!isEditMode)}
                className={singlePostPage.editModeToggleButton}
            >
                {isEditMode ? 'Cancel' : 'Edit Post'}
            </button>
        </div>
    );
};

export { EditModeToggle }