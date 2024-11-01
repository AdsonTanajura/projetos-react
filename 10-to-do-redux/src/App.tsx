import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="container">
      <h1>Lista de tarefas com Redux</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
