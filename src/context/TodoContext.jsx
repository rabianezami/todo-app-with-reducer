
import { createContext, useEffect, useReducer } from "react";
import { todoReducer } from "../reducer/todoReducer"

export const TodoContext = createContext()

export function TodoProvider({ children }) {
    const [todos, dispatch] = useReducer(todoReducer, [], () => {
        const storedTodos = localStorage.getItem("todos")
        return storedTodos ? JSON.parse(storedTodos) : []
    })

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}