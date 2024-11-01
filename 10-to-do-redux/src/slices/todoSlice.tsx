import { createSlice } from '@reduxjs/toolkit';

interface TodoSliceListProps {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoSliceState {
  list: TodoSliceListProps[];
  filter: 'all' | 'completed' | 'incomplete';
}

const initialState: TodoSliceState = {
  list: [],
  filter: 'all',
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push({
        id: new Date().toISOString(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    filterTodo: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, filterTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
