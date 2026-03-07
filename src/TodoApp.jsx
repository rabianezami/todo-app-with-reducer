import { useReducer, useState } from "react"

function todoReducer(state, action) {
    switch (action.type) {

        case "ADD_TODO":
            return [...state, action.payload]

        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.payload)

        case "TOGGLE_TODO":
            return state.map(todo =>
                todo.id === action.payload
                    ? { ...todo, complete: !todo.complete }
                    : todo
            )
        default:
            return state
    }
}

export default function TodoApp() {
    const [todos, dispatch] = useReducer(todoReducer, [])
    const [text, setText] = useState("")

    const handleAdd = () => {
        if (!text.trim()) return

        const newTodo = {
            id: Date.now(),
            text: text,
            complete: false
        }

        dispatch({
            type: "ADD_TODO",
            payload: newTodo
        })
        setText("")
    }

    return (
        <div>

            <h2>Todo App</h2>

            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter todo"
            />
            <button onClick={handleAdd}>Add</button>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span
                            onClick={() =>
                                dispatch({
                                    type: "TOGGLE_TODO",
                                    payload: todo.id
                                })
                            }
                        >
                            {todo.text}
                        </span>

                        <button
                            onClick={() =>
                                dispatch({
                                    type: "DELETE_TODO",
                                    payload: todo.id
                                })
                            }
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

