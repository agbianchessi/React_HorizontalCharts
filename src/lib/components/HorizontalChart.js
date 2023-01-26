/** 
 * For all details and documentation: {@link https://www.horizontalcharts.org|www.horizontalcharts.org}
 * @copyright Andrea Giovanni Bianchessi 2023
 * @author Andrea Giovanni Bianchessi <andrea.g.bianchessi@gmail.com>
 * @license MIT
 * @version 0.1.1
 */

import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { DataSample, TimeSeries, HorizontalChart as HorizontalChartCore } from './horizontalcharts.lib'

const HorizontalChart = ({ options, data, isRealTime = false }) => {

    const canvasRef = useRef(null)

    useEffect(() => {
        // Retrieve the canvas
        const canvas = canvasRef.current
        // Create the chart
        let chart = new HorizontalChartCore(options, isRealTime);
        chart.addTimeSeries(...data);
        chart.streamTo(canvas);
    })

    return <canvas ref={canvasRef} style={
        (options.horizontal == null || options.horizontal === true) ?
            { width: "100%" }
            :
            { height: "100%" }
    } />

}

HorizontalChart.propTypes = {
    options: PropTypes.object,
    data: PropTypes.array,
    isRealTime: PropTypes.bool
}

export { HorizontalChart as default, DataSample, TimeSeries };