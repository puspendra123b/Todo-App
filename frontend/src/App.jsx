import { useEffect, useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {

  const [todos , setTodos] = useState([]);

  useEffect(()=>{
    setInterval(()=>{
      fetch("https://todo-app-three-flame.vercel.app/todos")
      .then(async function (res){
        const json = await res.json();
        setTodos(json.todos)
      })
    },2000)
    
  }, [])

  return (
      <div>
       <CreateTodo />
       <Todos todos={todos}/>
      </div>
      
  )
}

export default App
