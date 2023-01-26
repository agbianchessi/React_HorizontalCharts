import './App.css';
import React, { useEffect } from 'react'
import HorizontalChart, { DataSample, TimeSeries } from './lib/'

function App() {

  // Colors
  const colors = ["#FF6384", "#36A2EB", "#4BC0C0", "#FFFF66", "#FF99FF"];

  // Options
  const options = { xAxis: { xLabel: "Percentage of completion" } };

  // Non real time

  // Create time series
  const ts1 = new TimeSeries(1, { labelText: "Day 1" });
  const ts2 = new TimeSeries(2, { labelText: "Day 2" });
  const ts3 = new TimeSeries(3, { labelText: "Day 3" });

  // Add data to time series
  ts1.data = [
    new DataSample({ color: '#FF0000', value: 20, desc: "Bob" }),
    new DataSample({ color: '#BB0000', value: 30, desc: "John" }),
    new DataSample({ color: '#880000', value: 10, desc: "Max" }),
    new DataSample({ color: '#330000', value: 40, desc: "Ann" })
  ];
  ts2.data = [
    new DataSample({ color: '#0000FF', value: 10, desc: "Bob" }),
    new DataSample({ color: '#0000BB', value: 50, desc: "John" }),
    new DataSample({ color: '#000088', value: 20, desc: "Max" }),
    new DataSample({ color: '#000033', value: 20, desc: "Ann" })
  ];
  ts3.data = [
    new DataSample({ color: '#00FF00', value: 10, desc: "Bob" }),
    new DataSample({ color: '#00BB00', value: 40, desc: "John" }),
    new DataSample({ color: '#008800', value: 15, desc: "Ann" })
  ];

  // Real time

  // Create time series
  let ts4 = new TimeSeries(1);
  let ts5 = new TimeSeries(2);

  // Update time series
  useEffect(() => {
    const id = setInterval(function () {
      //TimeSeries 4
      let color = colors[Math.floor(Math.random() * 5)];
      ts4.append(new DataSample({ color: color, value: Math.random() * 3000 }));
      //TimeSeries 5
      color = colors[Math.floor(Math.random() * 5)];
      ts5.append(new DataSample({ color: color, value: Math.random() * 5000 }));
    }, 5000);
    return () => clearInterval(id);
  })

  return (
    <div className="App">
      <HorizontalChart options={options} data={[ts1, ts2, ts3]} />
      <HorizontalChart options={options} data={[ts4, ts5]} isRealTime={true} />
    </div>
  );
}

export default App;