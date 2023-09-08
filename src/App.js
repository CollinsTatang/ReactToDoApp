import React from 'react';
import './App.css';
import SubmitForm from './conponents/SubmitForm/SubmitForm';
import TasksList from './conponents/TasksList/TasksList';
import Header from './conponents/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <SubmitForm />
      <TasksList />
    </div>
  );
}
export default App;
