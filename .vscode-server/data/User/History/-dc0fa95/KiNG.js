import React, { useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import {Chart as ChartJS , CategoryScale,LinearScale,PointElement} from 'chart.js'
import VitalSignGraph from './VitalSignGraph';  // Assuming the file is in the same directory

ChartJS.register(CategoryScale,LinearScale,PointElement ,)
import 'chart.js/auto'

const mac_address = 'imane'; // replace this with your mac address
const client = new W3CWebSocket(`ws://20.216.154.100:8000/ws/vitalsigns/average/${mac_address}/1month`);

const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    client.onmessage = (message) => {
      const parsedData = JSON.parse(message.data);
      setData(parsedData);
    };
  }, []);

  const labels = data.map(item => new Date(item.time * 1000).toLocaleTimeString());

  return (
    <div>
      <VitalSignGraph title="Blood Pressure" labels={labels} data={data.map(item => item.bloodPressure)} />
      <VitalSignGraph title="Body Temperature" labels={labels} data={data.map(item => item.bodyTemperature)} />
      <VitalSignGraph title="Heart Beat" labels={labels} data={data.map(item => item.heartBeat)} />
    </div>
  );
};

export default Chart;
