import React from 'react';
import { TodoItemInterface } from '../../interface';

const ToDoItem = React.memo(function MyComponent(
  props: TodoItemInterface
): React.ReactElement {
  return (
    <div className="todo-item">
      <div onClick={() => props.handleTodoComplete(props.todo.id)}>
        {props.todo.isCompleted ? (
          <span className="todo-item-checked">✔</span>
        ) : (
          <span className="todo-item-unchecked">✔</span>
        )}
      </div>
      <div className="todo-item-input-wrapper">
        <input
          value={props.todo.name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            props.handleTodoUpdate(event, props.todo.id)
          }
        />
      </div>
      <div
        className="item-remove"
        onClick={() => props.handleTodoRemove(props.todo.id)}
      >
        ⨯
      </div>
    </div>
  );
});

export default ToDoItem;
