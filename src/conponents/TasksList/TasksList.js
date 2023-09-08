import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';
import './TasksList.css';

function TasksList({ todosProps }) {
  return (
    <div className="tasks-list-container">
      <div className="tasks-list">
        {todosProps.map((todo) => (
          <Task key={todo.id} itemProp={todo} />
        ))}
      </div>
    </div>
  );
}
TasksList.propTypes = {
  todosProps: PropTypes.node.isRequired,
};
export default TasksList;
