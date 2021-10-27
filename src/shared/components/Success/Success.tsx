import { FC } from 'react';
import success from './scss/success.module.scss';

interface ISuccessProps {
    message?: string;
};

const Success: FC<ISuccessProps> = props => {
    const { message } = props;
    
    const renderMessage = message ? message : 'Success'!;

    return (
        <div className={success.base}>
            {renderMessage}
        </div>
    );
};

export default Success;