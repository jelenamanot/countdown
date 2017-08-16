import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //default deadline
      deadline: 'December 31, 2017',
      //to the input
      newDeadline: ''
    }
  }

  //method that updates the STATE
  changeDeadline() {
    this.setState({deadline: this.state.newDeadline })
  }

  render() {
    return (
      <div className="App">
        {/*read deadline from state*/}
        <h1>Countdown to {this.state.deadline}</h1>
        
        {/*passing props*/}
        <Clock 
          deadline={this.state.deadline}
        />

        <div className="mini-form">
          <input
            className="deadline-input"
            placeholder="How many days left?"
            onChange={ event => this.setState({newDeadline: event.target.value}) }
          />
          <button onClick={ () => this.changeDeadline() }>Find out!</button>
        </div>
      </div>
    );
  }
}

export default App;
