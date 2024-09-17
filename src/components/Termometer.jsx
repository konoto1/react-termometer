import React, { useState } from "react";

export function Termometer(props) {
    const {degress, color} = props;
    
    return (
        <div className='termometerConatainer'>
            <div style={{backgroundColor:color}} className="termometer">{degress} C</div>
        </div>
    )

}