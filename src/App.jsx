
import './App.css'
import { TodoProvider } from './context/TodoContext'
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {

  return (
    <TodoProvider>
      <h1>Todo App</h1>

      <TodoInput />
      <TodoList />
    </TodoProvider>
  )
}

export default App
