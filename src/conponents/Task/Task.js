import React from 'react';
import './Task.css';

const Task = () => (
  <div className="task-container">
    <div className="task-container-background">
      <div className="task-term-container">
        <h2 className="task-term">new task</h2>
      </div>
      <div className="buttons-container">
        <button type="submit" className="done-button">v</button>
        <button type="submit" className="delete-button">x</button>
      </div>
    </div>
  </div>
);
export default Task;
