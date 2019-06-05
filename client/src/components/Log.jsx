import React from 'react';

const Log = props => (
  <div className="log">
    {props.data.map((exp, i) => (
      <h3 key={i}>{exp}</h3>
    ))}
  </div>
);

export default Log;