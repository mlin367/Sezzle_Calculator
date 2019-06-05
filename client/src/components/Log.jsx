import React from 'react';
import '../css/Log.css';

const Log = props => (
  <div className="log">
    <h3>Calculation Log</h3>
    {props.data.map((exp, i) => (
      <div className="logEntry" key={i}>
        {exp}
        <hr />
      </div>
    ))}
  </div>
);

export default Log;