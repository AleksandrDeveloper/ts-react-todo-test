import React, { useState } from 'react';
import NavBar from './Navbar';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import { ITodos } from './Interface';
 
const App:React.FC = () => {
  const [todos, setTodos] = useState<ITodos[]>([])

  const addTodo=(title:string)=>{
    const newItem:ITodos={
      title,
      id:Date.now(),
      complited:false
    }

    setTodos(prev=>[newItem,...prev])
  }

  const complitedItem=(id:number)=>{
    console.log('dd');
     
   const f = todos.map(i=>{
      if(i.id===id){
        i.complited = !i.complited
      }
      return i
    })
    setTodos([...f]) 
  }
  const deliteItem=(id:number)=>{
    setTodos([...todos.filter(i=>i.id!==id)])
  }


  return(
   <>
   <NavBar />
   <div className="container">
     <ToDoForm addTodo={addTodo} />

     <ToDoList todos={todos} complitedItem={complitedItem} deliteItem={deliteItem} />
   </div>
   </>
  ) 
}

export default App