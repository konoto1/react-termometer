import {React, useEffect, useState } from "react";
import { Termometer } from "./Termometer.jsx";

export function MainThermometer() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('#0DCAF0');


    function handleColor() {
        
        if (count > 0) {
            setColor('#DC3545');
        } else {
            setColor('#0DCAF0');
        }
    }

    useEffect(()=> {handleColor()});

    function addCount() {
            setCount(count => count +1);
    }
     
    function subCount() {
            setCount(count => count - 1); 
    }
    
    return (
        <div className='mainContainer'>
            <Termometer degress={count} color={color}/>
            <div className='buttons'>
                <button style={{backgroundColor:'#DC3545'}} onClick={addCount}>+</button>
                <button style={{backgroundColor:'#0D6EFD'}} onClick={subCount}>-</button>
            </div>
        </div>
    );
}