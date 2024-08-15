// import React from "react";

export default function ToDo () {
    const handleEditTodo = (e) => {
        e.target.value
    }
    const handleCheckboxClick = () => {
        
    }
    return(
        <>
            <ul>
                <li>
                    <input 
                    type="checkbox" 
                    checked = {false}
                    onChange={handleCheckboxClick}
                    id="1"
                    />
                <input
                    type="text"
                    value=""
                    onChange={handleEditTodo}
                />
                </li>
            </ul>
        </>
    )
}