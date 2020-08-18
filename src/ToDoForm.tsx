import React, { useState } from 'react';

interface todo{
    addTodo(title:string):void
}

const ToDoForm: React.FC<todo> = ({addTodo}) => {
    const [title,setTitle] = useState<string>('')
     
    const handlerChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.target.value)
    }

    return ( 
        <div className="row">
            <div className="input-field col s12">
            <input 
            type="text" 
            value={title} 
            onChange={handlerChange}
            onKeyPress={(event:React.KeyboardEvent)=>{
                if(event.key ==='Enter'){
                    addTodo(title)
                    setTitle('')
                }
            }}
            />
            </div>
      </div>
     );
}
 
export default ToDoForm;