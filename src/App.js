import logo from './logo.svg';
import TaskForm from "./Components/TaskForm";
import TodoList from "./Components/TodoList";
import Footer from "./Components/Footer";
import { DataProvider } from "./Components/DataProvider";


function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>To Do List</h1>
        <div>
          <TaskForm />

          <TodoList />

          <Footer />

        </div>
      </div>
    </DataProvider>


  );
}

export default App;
