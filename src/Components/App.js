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
      marginTop: '100px',
    };

    const title = {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'helvetica',
      fontSize: '5.5em',
      marginBottom: '20px',
    }

    const inputBar = {
      width: '100%',
      padding: '12px 20px',
      margin: '8px 0',
      display: 'inline-block',
      border: '1px solid #ccc',
      bordeRadius: '4px',
      boxSizing: 'border-box',
    }

    const button = {
      display: 'inline-block',
      padding: '.75rem 1.25rem',
      borderRadius: '10rem',
      // BackgroundColor: 'blue',
      // color: '#fff',
      textTransform: 'uppercase',
      fontSize: '1.2rem',
      letterSpacing: '.15rem',
      // transition: 'all .3s',
      // position: 'relative',
      // overflow: 'hidden',
      zIndex: '1',
    }

    return(
      <div style={box}>
        <form onSubmit={this.onSumbitTask}>
          <label style={title} htmlFor="taskInput">Enter task</label>
          <input
            style={inputBar}
            onChange={this.handleChange}
            value={task.text}
            type="text" 
            id="taskInput"
          />
          <button style={button} type="submit">
            Add Task
          </button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;
