import * as React from "react"
import PropTypes from 'prop-types';

export default function ToDoComposer({handleAddTodo}) {

    const [label, setLabel] = React.useState("")
    const handleUpdateLabel = (e) => setLabel(e.target.value)
   
    function createToDo(label) {
        return{
            id: Math.floor(Math.random() * 10000),
            label,
            completed: false
        }
    }

    const handleAddTodoClick = () => {
        const todo = createToDo(label)
        handleAddTodo(todo)
        setLabel("")
    }

    ToDoComposer.propTypes = {
        handleAddTodo: PropTypes.func.isRequired,
    };
    
    return(
        <li>
            <input 
            placeholder="Add a new todo"
            type="text" 
            value={label}
            onChange={handleUpdateLabel}
            />
            <button
            disabled={label.length===0}
            onClick={handleAddTodoClick}
            >Add todo</button>
        </li>
    )
}

