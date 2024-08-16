import React from "react";

export default function ToDo () {
    const defaultTodo = {
        completed: false,
        todo: "Do something cool",
        id: 1,
    }
    
    const [todo,setTodo] = React.useState(defaultTodo)
    const [editing, setEditing] = React.useState(false)
    const handleEditTodo = (e) => {
        setTodo({...todo, todo: e.target.value})
    }
    const handleCheckboxClick = () => {
        setTodo({ 
            ...todo,
            completed: !todo.completed
     })
    }

    const handleEditClick =() => {
        setEditing(!editing)
    }
 
    return(
    <>
        <li>
            <label htmlFor={todo.id}>
                <div>
                    <input 
                    type="checkbox" 
                    id={todo.id}
                    onChange={handleCheckboxClick}
                    />
                
                    <input type="text"
                    value={todo.todo}
                    onChange={handleEditTodo}
                    />

                    <button onClick={handleEditClick}>Edit</button>
                </div>

            </label>
        </li>
    </>
    )
}