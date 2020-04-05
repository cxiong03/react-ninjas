import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Chang's first React app!</h1>
        <p>Welcome User</p>
        <Ninjas name='Chang' age='28' belt='Black'/>
        <Ninjas name='Yoshi' age='33' belt='Blue'/>
      </div>
    );
  }
} 

export default App;
