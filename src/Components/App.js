import React, { Component } from 'react';
import Overview from './Overview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: { text: ''},
      task: [],
    };
  }

  

  render() {
    const { task, tasks } = this.state;

    return(
      <div>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default App;
