import React from 'react';
import './App.css';
import Header from './conponents/Header/Header';
import TasksLogic from './conponents/TasksLogic';

function App() {
  return (
    <div className="App">
      <Header />
      <TasksLogic />
    </div>
  );
}
export default App;
