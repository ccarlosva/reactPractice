import * as React from "react"
import ToDo from "../ToDo/ToDo"

export default function ToDoList() {
    const [todos, setTodo] = React.useState([
        {id: 1,label: "Do something cool",completed: false},
        {id: 2,label: "Do something else",completed: false}
    ])

    const handleUpdateTodo = (updateTodo) =>{
        setTodo(updateTodo)
    }

    return(
        <ul>
            {todos.map((todo) =>
            <ToDo
            key={todo.id}
            label = {todo}
            handleUpdateTodo={handleUpdateTodo}
            />
            )}
        </ul>
    )
}