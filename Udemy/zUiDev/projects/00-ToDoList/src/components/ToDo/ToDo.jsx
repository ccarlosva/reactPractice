import "./ToDo.css"
import * as React from "react";
import PropTypes from 'prop-types';


export default function ToDo({todo,handleUpdateTodo}) {
 
    const [editing, setEditing] = React.useState(false)

    const handleEditClick = () => setEditing(!editing)
    const handleCheckboxClick = () => handleUpdateTodo({
        ...todo,
        completed: !todo.completed
    })
    const handleEditTodo= (e) => handleUpdateTodo({
        ...todo,
        label: e.target.value
    })

    ToDo.propTypes = {
        todo: PropTypes.shape({
          id: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
          completed: PropTypes.bool.isRequired,
        }).isRequired,
        handleUpdateTodo: PropTypes.func.isRequired,
      };

    return(
        <li>
            <label htmlFor={todo.id}>
                <div>
                    <input 
                        type="checkbox" 
                        id={todo.id} 
                        checked={todo.completed}
                        onChange={handleCheckboxClick}
                    />
                {editing? (
                    <input
                        type="text" 
                        value={todo.label}
                        onChange={handleEditTodo}
                    />
                ): 
                (<span className={`todo-item ${todo.completed ? 'checked' : ''}`}>{todo.label}</span>)
                }
                 </div>
                <button onClick={handleEditClick}>{editing ? "Save" : "Edit"}</button>
            </label>
        </li>
    )   
}