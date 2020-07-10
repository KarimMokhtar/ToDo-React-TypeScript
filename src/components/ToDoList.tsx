import React from 'react';
import ToDoItem from './ToDoItem';
import { TodoListInterface } from '../interface';

const ToDoList = (props: TodoListInterface): React.ReactElement => {
  return (
    <div className="todo-list">
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>
            <ToDoItem
              todo={todo}
              handleTodoComplete={props.handleTodoComplete}
              handleTodoRemove={props.handleTodoRemove}
              handleTodoUpdate={props.handleTodoUpdate}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
