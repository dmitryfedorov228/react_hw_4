import React from 'react';

const Button = ({color, width,fontSize}) => {
    return (
        <div>
            <button 
            style={
                         {
                        color:color,
                        width: width,
                        fontSize: fontSize
                        
                        }
                }
            >   

            click me

            </button>
        </div>
    );
};

export default Button;