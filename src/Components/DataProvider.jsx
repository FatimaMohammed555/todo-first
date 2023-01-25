
import React , {useEffect , useState , createContext} from 'react';

export const DataContext = createContext();



export const DataProvider = (props) => {
const [todos , setTodos]=useState(()=> {
  return JSON.parse(localStorage.getItem('todos')) || []
});

// 
// const [todoList, setTodoList] = useState(() => {
//   return JSON.parse(localStorage.getItem('todos')) || []
// });
  
// useEffect(() => {
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
// }, [todoList]);

//get data from localStorage
// useEffect(() => {
// const todos = JSON.parse(localStorage.getItem('todos'));
// if(todos){
//   setTodos(todos);
// }
// },[]);


//add data to localStorage
useEffect(() => {
localStorage.setItem('todos' , JSON.stringify(todos))
},[todos]);


  return (
    <DataContext.Provider value={[todos,setTodos]}>
      {props.children}
    </DataContext.Provider>
  )
}

// export default DataProvider
