import React from "react";
//props are read only you can't change the state
function ToDoItems(props) {
    return (
        <div onClick={()=>{
            props.delete(props.id)
        }}>
            <li>{props.text}</li>
        </div>
    )
}
export default ToDoItems;