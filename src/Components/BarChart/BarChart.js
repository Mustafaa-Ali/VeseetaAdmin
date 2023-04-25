import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';
import { useTranslation } from 'react-i18next';
const DemoColumn = (props) => {
  const { t } = useTranslation();
  console.log("props", props)
  const data = [
    {
      action: t("_doctor"),
      pv: props.info[0].Number,
    },
    {
      action: t("_city"),
      pv:props.info[1].Number,
    },
    {
      action: t("_speaciality"),
      pv: props.info[2].Number,
    },
    {
      action: t("_offer"),
      pv: props.info[3].Number,
    },
    {
      action: t("_user"),
      pv: props.info[4].Number,
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

