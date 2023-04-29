import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { RingProgress } from '@ant-design/plots';

const DemoRingProgress = (props) => {
    console.log("props from ring progress",props.info[1])
    let parcent = Number(props.info[1].Number) / 184 ;
    console.log("parcent", parcent)
  const config = {
    height: 300,
    width: 300,
    autoFit: false,
    percent: parcent,
    color: ['#5B8FF9', '#E8EDF3'],
  };
  return <RingProgress {...config} />;
};

export default  DemoRingProgress ;
// ReactDOM.render(<DemoRingProgress />, document.getElementById('container'));
