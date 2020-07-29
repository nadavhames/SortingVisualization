import React, {Component} from 'react';
import InputForm from "./InputForm";
import {ResultView} from "./ResultView";

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {timeline: [], currentStep: 0, loading: true};
        // pass in `this` so that populate function can call setState
        this.populateSortingData = this.populateSortingData.bind(this);
    }

    render() {
        let output = this.state.loading
          ? <p><em>Loading...</em></p>
          : <ResultView/>;

        return (
            <div>
                <InputForm submitData={this.populateSortingData}/>
                {output}
            </div>
        );
    }

    async populateSortingData(formData) {
        console.log(formData);
        const response = await fetch('/Sorting', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        console.log(data);
        this.setState({timeline: data, currentStep: 0, loading: false});
    }
}
