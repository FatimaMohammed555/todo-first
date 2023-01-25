import React, { useContext, useState } from 'react';
import { DataContext } from "./DataProvider";

const TaskForm = () => {

const [todos , setTodos]=useContext(DataContext);
const [todoName,setTodoName]=useState('');


const addTodo = (e) =>{
e.preventDefault();
setTodos([...todos , {name:todoName , complete:false}]);
setTodoName('');
}


  return (
      <form onSubmit={addTodo} autoComplete="off" className="mt-3">
          <input
              type="text"
              className="form-control"
              name="todos"
              id="todos"
              value={todoName}
              onChange={(e) => setTodoName(e.target.value)}
              placeholder="What need to be done ?"
              required
          />
          <button type="submit" >Create</button>
      </form>
  )
}

export default TaskForm
