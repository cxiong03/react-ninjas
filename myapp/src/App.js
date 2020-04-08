import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'J.Cole', age: 35, belt: 'black', id: 1 },
      { name: 'Kendrick', age: 34, belt: 'red', id: 2 },
      { name: 'Abel', age: 33, belt: 'white', id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [ ...this.state.ninjas, ninja ]
    this.setState({
      ninjas: ninjas
    })
  } 
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }
  componentDidMount(){
    console.log('component mounted');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState)
  }
  render() {
    return (
      <div className="App">
        <h1>Chang's first React app!</h1>
        <p>Welcome User</p>
        <Ninjas deleteNinja= { this.deleteNinja } ninjas= { this.state.ninjas } />
        <AddNinja addNinja= {this.addNinja } />
      </div>
    );
  }
} 

export default App;
