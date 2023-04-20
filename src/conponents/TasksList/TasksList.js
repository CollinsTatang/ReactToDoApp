import React from 'react';
import './TasksList.css';
import Task from '../Task/Task';

const TasksList = () => (
  <div className="tasks-list-container">
    <div className="tasks-list">
      <Task />
    </div>
  </div>
);
export default TasksList;
