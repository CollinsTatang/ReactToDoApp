import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SubmitForm from './SubmitForm/SubmitForm';
import TasksList from './TasksList/TasksList';

function TasksLogic() {
  // getting stored items
  const getInitialTodos = () => {
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  };
  const [todos, setTodos] = useState(getInitialTodos());
  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);
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
