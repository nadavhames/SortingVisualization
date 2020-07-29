import React, {useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";

const InputForm = ({submitData}) => {
    const [input, setInput] = useState('');
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
                           placeholder="Add comma separated list of numbers to be sorted"
                           onChange={e => setInput(e.target.value)}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleSelect" sm={2}>Select</Label>
                <Col sm={10}>
                    <Input type="select" name="select" id="exampleSelect" onChange={e => setInputType(e.target.value)}>
                        <option>Integer</option>
                        <option>String</option>
                    </Input>
                </Col>
            </FormGroup>
            <Button variant="primary" type="submit">
                Sort
            </Button>
        </Form>
    );
};

export default InputForm;