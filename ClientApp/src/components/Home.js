import React, {Component} from 'react';
import InputForm from "./InputForm";
import {ResultView} from "./ResultView";

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {values: [], timeline: [], loading: true};
        // pass in `this` so that populate function can call setState
        this.populateSortingData = this.populateSortingData.bind(this);
    }

    render() {
        // conditionally render results if data available
        let output = this.state.loading
          ? <p className="text-center"><em>Press Sort to Run...</em></p>
          : <ResultView state={this.state}/>;

        return (
            <div>
                <InputForm submitData={this.populateSortingData}/>
                {output}
            </div>
        );
    }

    async populateSortingData(formData) {
        // Hide the output until data received
        this.setState({loading: true});
        const response = await fetch('/Sorting', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        //  Make data visible again, save steps to state
        this.setState({values: formData.input, timeline: JSON.parse(data), loading: false});
    }
}
