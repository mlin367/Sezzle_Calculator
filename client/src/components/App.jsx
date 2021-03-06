import React from 'react';
import io from 'socket.io-client';
import Calculator from './Calculator';
import Log from './Log';
import * as math from 'mathjs'
import '../css/App.css';

const socket = io('https://sezzler-calculator.herokuapp.com/');

class App extends React.Component {
  state = {
    expression: '',
    log: [],
    finishedEvaluation: false
  };

  componentDidMount() {
    socket.on('evaluation', logData => {
      this.setState({
        log: logData
      })
    })
    socket.emit('evaluation', null);
  }

  buttonClicks(e) {
    const value = e.target.getAttribute('data-value');
    if (value === 'C') this.setState({ expression: '' });
    else if (value === 'CE')
      this.setState({
        expression: this.state.expression.slice(0, this.state.expression.length - 1)
      });
    else
      this.setState({
        expression: this.state.expression + value
      });
  }

  handleOnClick(e) {
    e.persist();
    if (this.state.finishedEvaluation) {
      this.setState({
        expression: '',
        finishedEvaluation: false
      }, () => this.buttonClicks(e));
    } else {
      this.buttonClicks(e);
    }
  } 

  evaluateExpression() {
    let resultString = this.state.expression.replace(/x/g, '*');
    resultString = resultString.replace(/÷/g, '/');
    try {
      const answer = math.eval(resultString);
      this.setState({
        expression: this.state.expression + ' = ' + answer,
        finishedEvaluation: true
      }, () => socket.emit('evaluation', this.state.expression))
    }
    catch(error) {
      this.setState({
        expression: 'Error',
        finishedEvaluation: true
      })
    }
  }

  render() {
    return (
      <div className="app">
        <div className="appWrapper">
          <h1>Sezzle Calculator</h1>
          <Calculator evaluateExpression={this.evaluateExpression.bind(this)} handleOnClick={this.handleOnClick.bind(this)} />
          <h2>{this.state.expression}</h2>
        </div>
        <Log data={this.state.log}/>
      </div>
    );
  }
}

export default App;
