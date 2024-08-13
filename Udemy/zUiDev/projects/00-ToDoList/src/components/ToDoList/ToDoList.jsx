import * as React from "react"
import ToDo from "../ToDo/ToDo"
import ToDoComposer from "../ToDoComposer/ToDoComposer"

export default function ToDoList() {
    const [todos, setTodos] = React.useState([
        {id: 1,label: "Do something cool",completed: false},
        {id: 2,label: "Do something else",completed: false},
        {id: 3,label: "Do something new",completed: false},
    ])

    const handleUpdateTodo = (updateTodo) =>{
        const newTodos = todos.map((todo) =>
            todo.id === updateTodo.id ? updateTodo :todo
        )
        setTodos(newTodos)
    }

    const handleDeleteTodo = (id) => {
        const newTodos = todos.filter((todo)=>
        todo.id !== id
        )
        setTodos(newTodos)
    }

    const handleAddTodo = (newTodo) => {
        const newTodos = [...todos, newTodo]
        setTodos(newTodos)
    }

    return(
        <ul>
            {todos.map((todo) =>
            <ToDo
            key={todo.id}
            todo = {todo}
            handleUpdateTodo = {handleUpdateTodo}
            handleDeleteTodo = {handleDeleteTodo}
            />
            )}
            <ToDoComposer handleAddTodo={handleAddTodo}/>
        </ul>
    )
}