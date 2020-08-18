import React from "react";

type ToDoListProps = {
  todos: any[]
  complitedItem(id:number):void
  deliteItem:(id:number)=>void
};

const ToDoList: React.FC<ToDoListProps> = ({ todos,complitedItem,deliteItem }) => {
  return (
    <ul>
      {todos.map((item) => {
        return (
          <li className="todoItem" key={item.id}>
            <label htmlFor="checkbox">ddwqe</label>
            <input id='checkbox' type="checkbox" checked={item.complited} onChange={()=>complitedItem(item.id)} />
            <span>{item.title} </span>
            <button onClick={()=>deliteItem(item.id)}>delite</button>
          </li> 
        );
      })}
    </ul>
  );
};

export default ToDoList;
