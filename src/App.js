import Task from './components/Task';
import Header from './components/Header';
import Form from './components/Form';
// import Todo from './components/Todo';
import TodoList from './components/TodoList';
import { useState } from "react"

function App() {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <h3> Task-2 - Todo </h3> 
      <Header></Header>
      <Form 
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      ></Form>
      <TodoList setTodoList={setTodoList} todoList={todoList}> </TodoList>
      <h3> ReactJS Task-1 </h3> 
       <Task />
    </div>
  );
}

export default App;
