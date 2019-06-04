import React from 'react';
import io from 'socket.io-client';
import Calculator from './Calculator';
import * as math from 'mathjs'
import '../css/App.css';

const socket = io('http://localhost:5000');

class App extends React.Component {
  state = {
    expression: '',
    log: []
  };

  handleOnClick(e) {
    const value = e.target.getAttribute('data-value');
    if (value === 'C') this.setState({ expression: '' });
    else if (value === 'CE')
      this.setState({
        expression: this.state.expression.slice(0, this.state.expression.length - 1)
      });
    else
      this.setState({
        expression: this.state.expression + ' ' + value
      });
  }

  evaluateExpression() {
    let resultString = this.state.expression.replace(/x/g, '*');
    resultString = resultString.replace(/÷/g, '/');
    try {
      const answer = math.eval(resultString);
      this.setState({
        expression: this.state.expression + ' = ' + answer
      })
    }
    catch(error) {
      this.setState({
        expression: 'Error'
      })
    }
  }

  render() {
    return (
      <div className="app">
        <div>
          <h1>Sezzle Calculator</h1>
          <Calculator evaluateExpression={this.evaluateExpression.bind(this)} handleOnClick={this.handleOnClick.bind(this)} />
        </div>
        <h2>{this.state.expression}</h2>
      </div>
    );
  }
}

export default App;
