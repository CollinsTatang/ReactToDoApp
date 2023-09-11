import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SubmitForm from './SubmitForm/SubmitForm';
import TasksList from './TasksList/TasksList';

function TasksLogic() {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: false,
    },
  ]);
  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const handleCheckBox = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };
  const deleteTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };
  return (
    <div>
      <SubmitForm addTodoItem={addTodoItem} />
      <TasksList todosProps={todos} handleChange={handleCheckBox} deleteTodo={deleteTodo} />
    </div>
  );
}
export default TasksLogic;
