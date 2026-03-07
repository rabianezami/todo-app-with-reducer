export function todoReducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload]

        case "DELETE":
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