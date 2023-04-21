import React from 'react';
import './SubmitForm.css';

function SubmitForm() {
  return (
    <div className="form">
      <form>
        <input className="input" placeholder="Add Task" />
        <button className="add-button" type="submit">Add</button>
      </form>
    </div>
  );
}
export default SubmitForm;
