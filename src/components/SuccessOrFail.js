import React from 'react';

const SuccessOrFail = ({color, message}) => {

  return <div style={{backgroundColor: color}}>{message}</div>;
};

export default SuccessOrFail;
