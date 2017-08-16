import React, { Component } from 'react';
import './App.css';

class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      days: '4',
      hours: '3',
      minutes: '33',
      seconds: '33'
    }
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    //live update clock
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000); //1s
  }

  getTimeUntil(deadline) {
    //time = deadline - current time
    const time = Date.parse(deadline) - Date.parse(new Date());

    //Math.floor()
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60)% 24);
    const days = Math.floor(time/(1000*60*60*24));

    //from App.js ---> get date
    // this.setState({days: days, hours: hours, minutes: minutes, seconds: seconds});
    this.setState({days, hours, minutes, seconds});
  }

  render() {
    return (
      <div className="clock-div clearfix">
        <p className="clock-days">{this.state.days} <span className="clock-small">days</span></p>
        <p className="clock-hours">{this.state.hours} <span className="clock-small">hours</span></p>
        <p className="clock-minutes">{this.state.minutes} <span className="clock-small">minutes</span></p>
        <p className="clock-seconds">{this.state.seconds} <span className="clock-small">seconds</span></p>
      </div>
    );
  }
}

export default Clock;