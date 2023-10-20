import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodosState } from '../../types/types';

let nextTodoId = 4; // 因为我们预设了3个待办事项，所以下一个 ID 从4开始

const todosSlice = createSlice({
  name: 'todos',
  initialState: [ // 预设数据
    { id: 1, text: '吃饭', completed: false },
    { id: 2, text: '睡觉', completed: false },
    { id: 3, text: '学习', completed: false }
  ] as TodosState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({ id: nextTodoId++, text: action.payload, completed: false });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const index = state.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
