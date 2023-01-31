import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DataSample, TimeSeries, HorizontalChartCore } from './HorizontalChartCore';

const HorizontalChart = ({ options, data, isRealTime = false }) => {

    const canvasRef = useRef(null);

    useEffect(() => {
        // Retrieve the canvas
        const canvas = canvasRef.current;
        // Create the chart
        let chart = new HorizontalChartCore(options, isRealTime);
        chart.addTimeSeries(...data);
        chart.streamTo(canvas);
    });

    return <canvas ref={canvasRef} style={
        (options.horizontal == null || options.horizontal === true) ?
            { width: "100%" }
            :
            { height: "100%" }
    }
    />

}

HorizontalChart.propTypes = {
    options: PropTypes.object,
    data: PropTypes.arrayOf(PropTypes.instanceOf(TimeSeries)).isRequired,
    isRealTime: PropTypes.bool
}

export { HorizontalChart as default, DataSample, TimeSeries };