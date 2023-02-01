# React HorizontalCharts
*React HorizontalCharts*: React components for [HorizontalCharts](https://www.horizontalcharts.org) library.

For all details and documentation: [www.horizontalcharts.org](https://www.horizontalcharts.org)

![chart](https://user-images.githubusercontent.com/5993480/138280570-0c7d3c0f-7671-4ae1-b5d4-fa89e587165e.png)

---

### Install

```
npm install react-horizontalcharts
```

Once it is installed, you can import and use it:

```js
import HorizontalChart, { DataSample, TimeSeries } from 'react-horizontalcharts'
```

### API

**Props**
- `options` - _Optional_ Chart options.
- `data` - An array of `TimeSeries` objects.
- `isRealTime` - _Optional_ Enables the real-time data visualization mode.

**Ref**
- `ref` - _Optional_ A *ref* to the *canvas* DOM node.

### Example
```js
function App() {
  
  // Refs
  const canvasRef1 = createRef();
  const canvasRef2 = createRef();

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
      <HorizontalChart options={options} data={[ts1, ts2, ts3]} ref={canvasRef1} />
      <HorizontalChart options={options} data={[ts4, ts5]} isRealTime={true} ref={canvasRef2} />
    </div>
  );
}
```
