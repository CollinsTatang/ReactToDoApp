import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import './Task.css';

function Task({ itemProp, handleChange, deleteTodo }) {
  return (
    <div className="task-container">
      <div className="task-container-background">
        <div className="task-term-container">
          <input type="checkbox" className="check-box" onClick={() => handleChange(itemProp.id)} />
          <h2 className="task-term">{itemProp.title}</h2>
        </div>
        <div className="buttons-container">
          <button type="submit" className="done-button">v</button>
          <button type="submit" className="delete-button" onClick={() => deleteTodo(itemProp.id)}>
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}
Task.propTypes = {
  itemProp: PropTypes.node.isRequired,
  handleChange: PropTypes.node.isRequired,
  deleteTodo: PropTypes.node.isRequired,
};
export default Task;
