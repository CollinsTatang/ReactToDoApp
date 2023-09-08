import SubmitForm from './SubmitForm/SubmitForm';
import TasksList from './TasksList/TasksList';

function TasksLogic() {
  const todos = [
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
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
  ];
  return (
    <div>
      <SubmitForm />
      <TasksList todosProps={todos} />
    </div>
  );
}
export default TasksLogic;
