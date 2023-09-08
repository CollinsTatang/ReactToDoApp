import React from 'react';
import './TasksList.css';
import Task from '../Task/Task';

function TasksList() {
  return (
    <div className="tasks-list-container">
      <div className="tasks-list">
        <Task />
      </div>
    </div>
  );
}
export default TasksList;
