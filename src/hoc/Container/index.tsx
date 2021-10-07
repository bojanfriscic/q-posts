import React from 'react'
import { useLogger } from '../../hooks/useLogger';

const Container: React.FC = ({ children }) => {
    useLogger({ componentName: 'Container' })

    return (
        <div className="c-container">
            {children}
        </div>
    )
};

export default Container;