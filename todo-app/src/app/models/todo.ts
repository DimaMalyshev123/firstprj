export interface Todo {
    _id: string;
    title: string;
    completed: boolean;
    description: string;
}

export interface State {
    todos: Todo[];
    selectedTodo: Todo;
    filter: string;
}