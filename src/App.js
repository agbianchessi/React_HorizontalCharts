import './App.css';
import React, { useEffect, createRef } from 'react'
import HorizontalChart, { DataSample, TimeSeries } from './lib'

function App() {

  const canvasRef1 = createRef();
  const canvasRef2 = createRef();
  const canvasRef3 = createRef();

  //
  const magnify = (event, cmd) => {
    console.log(cmd)
    canvasRef2.current.zoom(cmd)
  }

  // Colors
  const colors = ["#FF6384", "#36A2EB", "#4BC0C0", "#FFFF66", "#FF99FF"];

  // Options
  const options1 = { xAxis: { xLabel: "Percentage of completion" } };
  const options2 = { xAxis: { xLabel: "Random data" } };
  const options3 = { horizontal: false, xAxis: { xLabel: "Percentage of completion" } };

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

  // Vertical

  // Create time series
  const ts6 = new TimeSeries(1, { labelText: "Day 1" });
  const ts7 = new TimeSeries(2, { labelText: "Day 2" });
  const ts8 = new TimeSeries(3, { labelText: "Day 3" });

  // Add data to time series
  ts6.data = [
    new DataSample({ color: '#FF0000', value: 20, desc: "Bob" }),
    new DataSample({ color: '#BB0000', value: 30, desc: "John" }),
    new DataSample({ color: '#880000', value: 10, desc: "Max" }),
    new DataSample({ color: '#330000', value: 40, desc: "Ann" })
  ];
  ts7.data = [
    new DataSample({ color: '#0000FF', value: 10, desc: "Bob" }),
    new DataSample({ color: '#0000BB', value: 50, desc: "John" }),
    new DataSample({ color: '#000088', value: 20, desc: "Max" }),
    new DataSample({ color: '#000033', value: 20, desc: "Ann" })
  ];
  ts8.data = [
    new DataSample({ color: '#00FF00', value: 10, desc: "Bob" }),
    new DataSample({ color: '#00BB00', value: 40, desc: "John" }),
    new DataSample({ color: '#008800', value: 15, desc: "Ann" })
  ];

  return (
    <div className="App">
      <HorizontalChart options={options1} data={[ts1, ts2, ts3]} ref={canvasRef1} />
      <HorizontalChart options={options2} data={[ts4, ts5]} isRealTime={true} ref={canvasRef2} />
      <div>
        <button className="m-1" onClick={(event) => magnify(event, '+')}>&#x1F50D;+</button>
        <button className="m-1" onClick={(event) => magnify(event, '-')}>&#x1F50D;-</button>
      </div>
      <div style={{ height: "80vh", padding: "1em" }}>
        <HorizontalChart options={options3} data={[ts6, ts7, ts8]} ref={canvasRef3} />
      </div>
    </div>
  );
}

export default App;