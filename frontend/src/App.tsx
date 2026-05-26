import './App.css'

import { TodoItem } from './components/TodoItem' 

function App() {

  return (
     <div>
       <TodoItem titre="Apprendre React" done={true} />
       <TodoItem titre="Faire la vaisselle" done={false} />
       <TodoItem titre="Faire le ménage" done={true} />
     </div>
  )
}

export default App
