import { useContext, FC } from 'react';
import { SinglePostContext } from '../context/SinglePostContext';
import { MESSAGE_TYPE } from '../model/enums';
import singlePostPage from '../scss/SinglePostPage.module.scss';

const SubmittingFailure: FC = () => {
    const context = useContext(SinglePostContext);
    const { handleCloseMessage } = context;

    return (
        <p
            onClick={() => handleCloseMessage(MESSAGE_TYPE.SUCCESS)}
            className={singlePostPage.messageFailure}
        >
            There has been an error, your post wasn't updated.
        </p>
    );
};

export { SubmittingFailure }