import React, { Component } from 'react';
import Overview from './Overview';
import uniqid from 'uniqid';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: { 
        text: '',
        id: uniqid()
      },
      tasks: [],
    };
  }

  // Sets current task in state to whatever is typed in form.
  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        id: this.state.task.id,
      }
    });
  };

  onSumbitTask = (e) => {
    e.preventDefault(); // To avoid refreshing the form after submitting
    this.setState({
      tasks: this.state.tasks.concat(this.state.task), // Adds task into the task array
      task: { 
        text: '',
        id: uniqid()
       },
    })
  }

  render() {
    const { task, tasks } = this.state;

    return(
      <div>
        <form onSubmit={this.onSumbitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input 
            onChange={this.handleChange}
            value={task.text}
            type="text" 
            id="taskInput"
          />
          <button type="submit">
            Add Task
          </button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;
