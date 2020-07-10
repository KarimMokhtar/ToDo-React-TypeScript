import React from 'react';

import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

import { TodoInterface } from './interface';

import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = React.useState<TodoInterface[]>([]);

  function handleTodoCreate(todo: TodoInterface) {
    const newTodosState: TodoInterface[] = [...todos];
    newTodosState.push(todo);
    setTodos(newTodosState);
  }
  function handleTodoUpdate(
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) {
    const newTodosState: TodoInterface[] = [...todos];
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.name =
      event.target.value;
    setTodos(newTodosState);
  }

  function handleTodoRemove(id: string) {
    const newTodosState: TodoInterface[] = todos.filter(
      (todo: TodoInterface) => todo.id !== id
    );
    setTodos(newTodosState);
  }

  function handleTodoComplete(id: string) {
    const newTodosState: TodoInterface[] = [...todos];
    newTodosState.find(
      (todo: TodoInterface) => todo.id === id
    )!.isCompleted = !newTodosState.find(
      (todo: TodoInterface) => todo.id === id
    )!.isCompleted;

    setTodos(newTodosState);
  }
  return (
    <div className="App">
      <React.Fragment>
        <h2>To Do App</h2>
        <ToDoForm todos={todos} handleTodoCreate={handleTodoCreate} />
        <ToDoList
          todos={todos}
          handleTodoComplete={handleTodoComplete}
          handleTodoRemove={handleTodoRemove}
          handleTodoUpdate={handleTodoUpdate}
        />
      </React.Fragment>
    </div>
  );
};

export default App;
