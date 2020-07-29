import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export class ResultView extends React.Component {
    constructor(props) {
        super(props);
    }

    options = {
        chart: {
            type: 'bar',
            marginLeft: 100
        },
        title: false,
        yAxis: {
            title: {
                text: ''
            }
        },
        xAxis: {
            type: 'category',
            min: 0,
            labels: {
                animate: true,
                enabled: false
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            dataLabels: {
                enabled: true,
                format: '{y:,.2f}'
            },
            dataSorting: {
                enabled: true,
                sortKey: 'order.value'
            },
            // data: getData()
        }]
    }

    render() {
        return (
            <HighchartsReact highcharts={Highcharts} options={this.options}/>
        );
    }

}
