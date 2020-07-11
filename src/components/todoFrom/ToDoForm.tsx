import React from 'react';
import shortid from 'shortid';
import { TodoInterface, TodoFormInterface } from '../../interface';

const ToDoForm = React.memo(function MyComponent(
  props: TodoFormInterface
): React.ReactElement {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [values, setValues] = React.useState('');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValues(event.target.value);
  }
  function handleInputEnter(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      const newTodo: TodoInterface = {
        id: shortid.generate(),
        name: values,
        isCompleted: false,
      };
      props.handleTodoCreate(newTodo);
      if (inputRef && inputRef.current) {
        inputRef.current.value = '';
      }
    }
  }

  return (
    <div className="todo-form">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter new todo"
        onChange={(event) => handleInputChange(event)}
        onKeyPress={(event) => handleInputEnter(event)}
      />
    </div>
  );
});

export default ToDoForm;
