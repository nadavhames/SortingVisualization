import React, {useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";

const InputForm = ({submitData}) => {
    // Use react hooks to init state for form values
    const [input, setInput] = useState('6,2,1,3,4');
    const [inputType, setInputType] = useState('Integer');

    const handleSubmit = (e) => {
        e.preventDefault()
        submitData({input: input, type: inputType})
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup row>
                <Label for="input" sm={2}>Input</Label>
                <Col sm={10}>
                    <Input type="text" name="input" id="input"
                           placeholder="Add comma separated list of numbers or strings to be sorted. Default input is 6,2,1,3,4."
                           onChange={e => setInput(e.target.value)}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="typeSelect" sm={2}>Type</Label>
                <Col sm={10}>
                    <Input type="select" name="select" id="typeSelect" onChange={e => setInputType(e.target.value)}>
                        <option>Integer</option>
                        <option>String</option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Button className="m-auto float-none" variant="primary" type="submit">
                    Sort
                </Button>
            </FormGroup>
        </Form>
    );
};

export default InputForm;