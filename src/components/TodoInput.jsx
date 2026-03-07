import { useContext, useState } from "react"
import { TodoContext } from "../context/TodoContext"

export default function TodoInput() {

    const { dispatch } = useContext(TodoContext)
    const [text, setText] = useState("")

    const handleAdd = () => {
        if (!text.trim()) return

        dispatch({
            type: "ADD_TODO",
            payload: {
                id: Date.now(),
                text,
                complete: false
            }
        })
        setText("")
    }

    return (
        <div>

            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button onClick={handleAdd}>
                Add
            </button>

        </div>
    )
}