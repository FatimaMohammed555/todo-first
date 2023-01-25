import React , {useContext} from 'react';
import ListItem from "../Components/ListItem";
import {DataContext} from "../Components/DataProvider";

 const TodoList = () => {
 
 const [todos , setTodos]=useContext(DataContext);
 
  return (
    <ul>
    {
    todos.map((todo , index) => (
      <ListItem todo={todo} key={index} id={index} />
    ))
    }
  </ul>
  )
}

export default TodoList;
