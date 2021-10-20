import { useContext, FC } from 'react';
import { SinglePostContext } from '../context/SinglePostContext';
import { MESSAGE_TYPE } from '../model/enums';
import singlePostPage from '../scss/SinglePostPage.module.scss';

const SubmittingSuccess: FC = () => {
    const context = useContext(SinglePostContext);
    const { handleCloseMessage } = context;

    return (
        <p 
            onClick={() => handleCloseMessage(MESSAGE_TYPE.SUCCESS)}
            className={singlePostPage.messageSuccess}
        >
            Success! Your post has been added.
        </p>
    );
};

export { SubmittingSuccess };