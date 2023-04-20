import React from 'react';
import './App.css';
import SubmitForm from './conponents/SubmitForm/SubmitForm';
import TasksList from './conponents/TasksList/TasksList';

const App = () => (
  <div className="App">
    <h1>To Do App React</h1>
    <SubmitForm />
    <TasksList />
  </div>
);
export default App;
