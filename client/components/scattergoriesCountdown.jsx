import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

var CountdownTimer = React.createClass({
  getInitialState: function() {
    return {
      secondsRemaining: 0
    };
  },
  componentWillMount: function(){
    <button className="roll-die" onClick={this.startTimer}></button>
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {  
    return (
      <div>Seconds Remaining: {this.state.secondsRemaining}</div>
    );
  },
  startTimer: function(){
    this.setState({ secondsRemaining: this.props.secondsRemaining });
    this.interval = setInterval(this.tick, 1000);
  }, 
  tick: function(){
    this.setState({secondsRemaining: this.state.secondsRemaining - 1});
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
    }
  }
});

ReactDOM.render(<CountdownTimer secondsRemaining="90" />, document.getElementById('scattergoriesTimer'));

// module.exports = CountdownTimer;