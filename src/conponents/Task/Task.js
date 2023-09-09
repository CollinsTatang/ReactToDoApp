import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

function Task({ itemProp }) {
  return (
    <div className="task-container">
      <div className="task-container-background">
        <div className="task-term-container">
          <input type="checkbox" className="check-box" />
          <h2 className="task-term">{itemProp.title}</h2>
        </div>
        <div className="buttons-container">
          <button type="submit" className="done-button">v</button>
          <button type="submit" className="delete-button">x</button>
        </div>
      </div>
    </div>
  );
}
Task.propTypes = {
  itemProp: PropTypes.node.isRequired,
};
export default Task;
