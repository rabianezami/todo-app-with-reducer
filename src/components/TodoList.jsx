import { useContext } from "react";
import { TodoContext } from "../context/TodoContext"

export default function TodoList() {

    const { todos, dispatch } = useContext(TodoContext)

    return (
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
                                type: "DELETE",
                                payload: todo.id
                            })
                        }
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    )
}