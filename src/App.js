import React from 'react';
import './App.css';
import SubmitForm from './conponents/SubmitForm/SubmitForm';
import TasksList from './conponents/TasksList/TasksList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask(task) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.concat(task),
    }));
  }

  removeTask(id) {
    const tasks = this.state.tasks.filter((element) => (element.id !== id));
    this.setState({ tasks });
  }

  render() {
    return (
      <div className="App">
        <h1>To Do App React</h1>
        <SubmitForm addTask={this.addTask} />
        <TasksList tasks={this.state.tasks} removeTask={this.removeTask} />
      </div>
    );
  }
}
export default App;
