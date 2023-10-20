export type User = {
  id: string
  name: string
  age: number
  gender: "male" | "female" | "other"
}

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type TodosState = Todo[];
