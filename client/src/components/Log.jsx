import React from 'react';

const Log = props => (
  <div className="props">
    {props.data.map((exp, i) => (
      <h3 key={i}>{exp}</h3>
    ))}
  </div>
);

export default Log;