import React from "react";
import { Button, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";

class MyForm extends React.Component {
    render() {
        const { title, description, options, errors, buttonValue, handleChange, handleOptionChange, createOption, deleteOption, handleSubmit } = this.props;
        return (
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input
                        name="title"
                        id="title"
                        placeholder="A Dummy Title"
                        value={title}
                        onChange={handleChange}
                        invalid={errors.title ? true : false}
                    />
                    {errors.title && <FormFeedback>{errors.title}</FormFeedback>}
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                        name="description"
                        type="textarea"
                        id="description"
                        placeholder="Describe Your Poll . . ."
                        value={description}
                        onChange={handleChange}
                        invalid={errors.description ? true : false}
                    />
                    {errors.description && <FormFeedback>{errors.description}</FormFeedback>}
                </FormGroup>
                <FormGroup>
                    <Label>
                        Enter Options
                        <span style={{ marginLeft: '30px', background: 'green', color: 'white', padding: '5px', borderRadius: '5px', cursor: 'pointer' }} onClick={createOption}>Add Option</span>
                    </Label>
                    {options.map((opt, i) => (
                        <div key={opt.id} className="d-flex my-2">
                            <Input
                                value={opt.value}
                                onChange={e => handleOptionChange(e, i)}
                                placeholder={`Option ${i + 1}`}
                                invalid={errors.options && errors.options[i] ? true : false}
                            />
                            <Button color="danger" disabled={options.length <= 2} className="ml - 2" onClick={() => deleteOption(i)}>Delete</Button>
                        </div>
                    ))}
                </FormGroup>
                <Button color="primary" type="submit" >{buttonValue}</Button>
            </Form>
        );
    }
}

export default MyForm;