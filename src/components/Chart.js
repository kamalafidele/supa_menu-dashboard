import React from 'react';
import Chart from 'react-apexcharts';

function ChartElement({ chartData }) {

    return (
        <div>
            <Chart options={chartData.options} series={chartData.series} type='line' width={500} height={350}/>
        </div>
    );
}

export default ChartElement;