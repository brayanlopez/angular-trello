export interface ToDo {
  id: string;
  title: string;
  status?: string;
}

export interface Column {
  title: string;
  todos: ToDo[];
}
