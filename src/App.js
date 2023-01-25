import './App.css';
import HorizontalChart, { DataSample, TimeSeries } from './lib/'

function App() {

  // Options
  const options = { xAxis: { xLabel: "Percentage of completion" } };

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


  return (
    <div className="App">
      <header>
      </header>
      <body>
        <HorizontalChart options={options} data={[ts1, ts2, ts3]} />
      </body>
    </div>
  );
}

export default App;