import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const mac_address = 'imane'; // replace this with your mac address
const client = new W3CWebSocket(`ws://20.216.154.100:8000/ws/vitalsigns/average/${mac_address}`);

const Chart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      { label: 'Blood Pressure', data: [], backgroundColor: 'rgba(75,192,192,0.4)', borderColor: 'rgba(75,192,192,1)', borderWidth: 2 },
      { label: 'Body Temperature', data: [], backgroundColor: 'rgba(75,75,192,0.4)', borderColor: 'rgba(75,75,192,1)', borderWidth: 2 },
      { label: 'Heart Beat', data: [], backgroundColor: 'rgba(192,75,75,0.4)', borderColor: 'rgba(192,75,75,1)', borderWidth: 2 },
    ],
  });

  useEffect(() => {
    client.onmessage = (message) => {
      const data = JSON.parse(message.data);
      setChartData(prevChartData => ({
        ...prevChartData,
        labels: data.map(item => new Date(item.time * 1000).toLocaleTimeString()),
        datasets: [
          { ...prevChartData.datasets[0], data: data.map(item => item.bloodPressure) },
          { ...prevChartData.datasets[1], data: data.map(item => item.bodyTemperature) },
          { ...prevChartData.datasets[2], data: data.map(item => item.heartBeat) },
        ],
      }));
    };
  }, []);

  console.log(chartData)

  return (
    <div>
    </div>
  );
};

export default Chart;
