import React from 'react'

const Container: React.FC = ({ children }) => {
    return (
        <div className="c-container">
            {children}
        </div>
    )
};

export default Container;