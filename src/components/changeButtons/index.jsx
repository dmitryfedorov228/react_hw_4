import  React , { useState} from 'react';

const Buttons = () => {

    const [color, setColor] = useState('')
    


    return (
        <div>   
        <button style={{background:'red'}} onClick={() => setColor('red')}>Red</button>
        <button style={{background:'green'}} onClick={() => setColor('green')}>Green</button>
        <button style={{background:'blue'}} onClick={() => setColor('blue')} >Blue</button>
        <button style={{background:'aquamarine'}} onClick={() => setColor('aquamarine')}>Aquamarine</button>
        <button style={{background:'purple'}} onClick={() => setColor('purple')}>Purple</button>
        <button style={{background:'orange'}} onClick={() => setColor('orange')}>Orange</button>
        <button style={{background:'violet'}} onClick={() => setColor('violet')}>Violet</button>
        <button style={{background:'black', color:'white'}} onClick={() => setColor('black')}>Black</button>
        <button style={{background:'gray'}} onClick={() => setColor('gray')}>Gray</button>
        <button style={{background:'GreenYellow'}} onClick={() => setColor('GreenYellow')}>GreenYellow</button>
        <div style={{background: color, width: '100vw', height: '100vh'}}></div>
            
        </div>
    );
};

export default Buttons;