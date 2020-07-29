import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export class ResultView extends React.Component {
    constructor(props) {
        super(props);
        this.data = this.initializeData(props.state.values)
        this.state = {
            options: {
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
                xAxis:  {
                    type: 'category',
                    min: 0,
                    labels: {
                        animate: true,
                        enabled: true
                    }
                },
                legend: {
                    enabled: false
                },
                series: [{
                    dataLabels: {
                        enabled: true,
                        // format: '{y:,.2f}'
                    },
                    dataSorting: {
                        enabled: true,
                        sortKey: 'order.value'
                    },
                    data: this.data
                }]
            }
        }
        this.updateSeries(this.data);
    }

    initializeData(values) {
        let formattedData = []
        for (const [index, element] of values.split(',').entries()) {
            // Check if elements are strings or integers
            if (isNaN(element)) {
                formattedData.push({y: index + 1, name: element, order: {value: index}});
            } else {
                formattedData.push({y: parseInt(element), name: element, order: {value: index}});
            }
        }
        return formattedData;
    }

    processDataStep(data, step) {
        console.log(data, step);
        // Find indexes of the dataset that need to be swapped
        let item1Index = -1;
        let item2Index = -1;
        for (const [index, element] of data.entries()) {
            if (element.order.value === step.Item1) {
                item1Index = index;
            } 
            if (element.order.value === step.Item2) {
                item2Index = index
            }
            if (item1Index === true && item2Index === true) {
                break;
            }
        }
        // Swap order.value between indexes
        console.log(item1Index, item2Index);
        let firstVal = data[item1Index].order.value;
        data[item1Index].order.value = data[item2Index].order.value;
        data[item2Index].order.value = firstVal;
    }
    
    updateSeries(data) {
        let currentData = data;
        let stop = false;
        let currentStep = this.props.state.currentStep;
        let timeline = this.props.state.timeline;
        setInterval(() => {
            this.setState({
                options: {
                    series: [
                        {data: currentData}
                    ]
                }
            });
            if (currentStep <= timeline.length - 1) {
                if (!stop) this.processDataStep(currentData, timeline[currentStep]);
                if (currentStep === timeline.length - 1) stop = true;
                if (currentStep < timeline.length -1) currentStep += 1;
            }
        }, 1500);
    }

    render() {
        const {options} = this.state;
        return (
            <HighchartsReact highcharts={Highcharts} options={options}/>
        );
    }

}
