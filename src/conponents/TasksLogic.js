import { useState } from 'react';
import SubmitForm from './SubmitForm/SubmitForm';
import TasksList from './TasksList/TasksList';

function TasksLogic() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: false,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);
  const handleChange = (id) => {
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
  return (
    <div>
      <SubmitForm />
      <TasksList todosProps={todos} handleChange={handleChange} />
    </div>
  );
}
export default TasksLogic;
