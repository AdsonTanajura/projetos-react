import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { filterTodo, removeTodo, toggleTodo } from '../slices/todoSlice';

const TodoList = () => {
  const { filter, list } = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();

  const filteredList = list.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div>
      <button onClick={() => dispatch(filterTodo('all'))}>Todas</button>
      <button onClick={() => dispatch(filterTodo('completed'))}>
        Completas
      </button>
      <button onClick={() => dispatch(filterTodo('incomplete'))}>
        Incompletas
      </button>
      <ul>
        {filteredList.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              className={todo.completed ? 'line-through' : ''}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
