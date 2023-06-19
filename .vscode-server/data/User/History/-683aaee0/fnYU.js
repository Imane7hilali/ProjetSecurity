import React from 'react';
import { Line } from 'react-chartjs-2';

// VitalSignGraph component
const VitalSignGraph = ({title, labels, data}) => (
  <div>
    <h2>{title}</h2>
    <Line
      data={{
        labels: labels,
        datasets: [
          {
            label: title,
            data: data,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: '#000',
            borderWidth: 2
          }
        ]
      }}
      options={{
        responsive: true,
        scales: {
          x: {
            display: true,
            grid: {
              display: false
            }
          },
          y: {
            display: true,
            grid: {
              display: false
            },
            beginAtZero: true,
            ticks: {
              autoSkip: true,
              maxTicksLimit: 10
            },
          }
        }
      }}
    />
  </div>
);

export default VitalSignGraph;
