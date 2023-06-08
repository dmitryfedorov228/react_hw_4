import React from 'react';



const List = ({data}) => {
    return (
        <ul className='List'>
        {
                data.map((todo,idx) => {

                    return(
                        <li key={idx}>
                            <span>{todo.title}</span>
                            <input 
                                type='checkbox'
                                checked ={todo.isCompleted}
                            />
                        </li>
                    )
                })




        }
        </ul>
    );
};

export default List;