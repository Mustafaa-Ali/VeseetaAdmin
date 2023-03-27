import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const DemoColumn = () => {
  const data = [
    {
      action: '2018',
      pv: 50000,
    },
    {
      action: '2019',
      pv: 35000,
    },
    {
      action: '2020',
      pv: 25000,
    },
    {
      action: '2021',
      pv: 15000,
    },
    {
      action: '2022',
      pv: 8500,
    },
  ];
  const config = {
    data,
    xField: 'action',
    yField: 'pv',
    conversionTag: {},
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return <Column {...config} />;
};



export default DemoColumn;

