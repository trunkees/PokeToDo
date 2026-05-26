import './App.css'
import { useState } from 'react'
import { TodoItem } from './components/TodoItem'
import type { Todo } from './types/todo'

function App() {

  const [todos,setTodos] = useState<Todo[]>([
    { id: 1, titre: "Apprendre React", done: true },
    { id: 2, titre: "Faire la vaisselle", done: false },
  ]);

  return (
     <div>
       {todos.map((todo) => (
         <TodoItem key={todo.id} titre={todo.titre} done={todo.done} />
       ))}
     </div>
  )
}

export default App
