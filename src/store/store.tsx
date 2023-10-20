import { configureStore } from "@reduxjs/toolkit"
import todosReducer from "./modules/todos"

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
})

export default store
