import React from 'react';
import Header from '../Header/Header';
import TasksLogic from '../TasksLogic';

function Home() {
  return (
    <div className="wrapper">
      <Header />
      <TasksLogic />
    </div>
  );
}
export default Home;
