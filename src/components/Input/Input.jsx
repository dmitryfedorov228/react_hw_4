import React from 'react';

const Input = ({border, backgroundColor, color}) => {
    return (
        <div>
            <input 
                style={{
                    border: border,
                    backgroundColor : backgroundColor,
                    color: color
                }}
            />
        </div>
    );
};

export default Input;