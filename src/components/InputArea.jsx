import React, { useState } from "react";

function InputArea(props) {
    const [newText, setText] = useState("");


    function handleChange(e) {
        const newValue = e.target.value;
        setText(newValue);
    }
    return (
        <div className="form">
            <input type="text" value={newText} onChange={handleChange} />
            <button onClick={()=>{
                props.onAdd(newText); 
                setText(""); 
            }} >
                <span>Add</span>
            </button>
        </div>
        
    )
}
export default InputArea;