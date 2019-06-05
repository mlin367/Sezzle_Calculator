import React from 'react';
import '../css/Calculator.css';

const Calculator = props => (
  <div className="calculator">
    <div onClick={props.handleOnClick} data-value="C" className="button">C</div>
    <div onClick={props.handleOnClick} data-value="(" className="button">(</div>
    <div onClick={props.handleOnClick} data-value=")" className="button">)</div>
    <div onClick={props.handleOnClick} data-value="CE" className="button">CE</div>
    <div onClick={props.handleOnClick} data-value="7" className="button">7</div>
    <div onClick={props.handleOnClick} data-value="8" className="button">8</div>
    <div onClick={props.handleOnClick} data-value="9" className="button">9</div>
    <div onClick={props.handleOnClick} data-value=" ÷ " className="button">÷</div>
    <div onClick={props.handleOnClick} data-value="4" className="button">4</div>
    <div onClick={props.handleOnClick} data-value="5" className="button">5</div>
    <div onClick={props.handleOnClick} data-value="6" className="button">6</div>
    <div onClick={props.handleOnClick} data-value=" x " className="button">x</div>
    <div onClick={props.handleOnClick} data-value="1" className="button">1</div>
    <div onClick={props.handleOnClick} data-value="2" className="button">2</div>
    <div onClick={props.handleOnClick} data-value="3" className="button">3</div>
    <div onClick={props.handleOnClick} data-value=" - " className="button">-</div>
    <div onClick={props.handleOnClick} data-value="0" className="button">0</div>
    <div onClick={props.handleOnClick} data-value="." className="button">.</div>
    <div onClick={props.evaluateExpression} data-value="=" className="button">=</div>
    <div onClick={props.handleOnClick} data-value=" + " className="button">+</div>
  </div>
);

export default Calculator;