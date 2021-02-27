export interface ToDo {
  id: string;
  description: string;
  isCompleted: boolean;
}

export interface State {
  todos: Todo[];
  selectedTodo: string | null;
  counter: number;
}