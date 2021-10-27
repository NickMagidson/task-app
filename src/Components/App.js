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

    // STYLING
    const box = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '200px', 
    };

    const title = {
      fontFamily: 'helvetica',
      fontSize: '3em'
    }

    return(
      <div>
        <form style={box} onSubmit={this.onSumbitTask}>
          <label style={title} htmlFor="taskInput">Enter task</label>
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
