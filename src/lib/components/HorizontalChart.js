import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { DataSample, TimeSeries, HorizontalChart as HorizontalChartCore } from './horizontalcharts.lib'

const HorizontalChart = ({ options, data }) => {

    const canvasRef = useRef(null)

    useEffect(() => {
        // Retrieve the canvas
        const canvas = canvasRef.current
        // Create the chart
        let chart = new HorizontalChartCore(options);
        chart.addTimeSeries(...data);
        chart.streamTo(canvas);
    }, [])

    return <canvas ref={canvasRef} style={{ width: "100%" }} />
}

HorizontalChart.propTypes = {
    options: PropTypes.object,
    data: PropTypes.array
}

export { HorizontalChart as default, DataSample, TimeSeries };