import { useState } from 'react';
import PropTypes from 'prop-types';
import './SubmitForm.css';

function SubmitForm({ addTodoItem }) {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('Successfully Added');
    } else {
      setMessage('Please add item.');
    }
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={handleChange} className="input" placeholder="Add Task" />
        <button className="add-button" type="submit">Add</button>
      </form>
      <span>{message}</span>
    </div>
  );
}
SubmitForm.propTypes = {
  addTodoItem: PropTypes.node.isRequired,
};
export default SubmitForm;
