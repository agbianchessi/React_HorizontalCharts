import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { DataSample, TimeSeries, HorizontalChartCore } from './HorizontalChartCore';

const HorizontalChart = forwardRef(({ options, data, isRealTime = false }, parentRef) => {
    const chart = useRef(null)
    const canvasRef = useRef(null);

    useImperativeHandle(parentRef, () => ({
        zoom: (cmd) => {
            const xUPP = chart.current?.options?.xAxis?.xUnitsPerPixel;
            if (chart.current?.options?.xAxis?.xUnitsPerPixel) {
                if (cmd === '+')
                    chart.current.options.xAxis.xUnitsPerPixel = xUPP * 0.9
                else
                    chart.current.options.xAxis.xUnitsPerPixel = xUPP * 1.1
            }

        },
        getContext: () => {
            if (canvasRef.current)
                return canvasRef.current.getContext("2d");
        }
    }));

    useEffect(() => {
        // Retrieve the canvas
        const canvas = canvasRef.current;
        // Create the chart
        chart.current = new HorizontalChartCore(options, isRealTime);
        chart.current.addTimeSeries(...data);
        chart.current.streamTo(canvas);
    },[options, data]);

    return <canvas ref={canvasRef} style={
        (options.horizontal == null || options.horizontal === true) ?
            { width: "100%" }
            :
            { height: "100%" }
    }
    />

});

HorizontalChart.propTypes = {
    options: PropTypes.object,
    data: PropTypes.arrayOf(PropTypes.instanceOf(TimeSeries)).isRequired,
    isRealTime: PropTypes.bool
}

export { HorizontalChart as default, DataSample, TimeSeries };