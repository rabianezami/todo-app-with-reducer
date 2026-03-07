
import { createContext, useReducer } from "react";
import { todoReducer } from "../reducer/todoReducer"

export const TodoContext = createContext()

export function TodoProvider({ children }) {
    const [todos, dispatch] = useReducer(todoReducer)

    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}