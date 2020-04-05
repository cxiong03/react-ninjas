import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      { name: 'J.Cole', age: 35, belt: 'black', id: 1 },
      { name: 'Kendrick', age: 34, belt: 'red', id: 2 },
      { name: 'Abel', age: 33, belt: 'white', id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Chang's first React app!</h1>
        <p>Welcome User</p>
        <Ninjas ninjas= { this.state.ninjas }/>
      </div>
    );
  }
} 

export default App;
