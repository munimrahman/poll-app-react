import React from "react";
import { Button, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";

class ParticipationForm extends React.Component {
    state = {
        name: '',
        selectedOption: '',
        errors: {}
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const { errors, isValid } = this.validate()

        if (isValid) {
            this.props.getOpinion({
                pollId: this.props.poll.id,
                name: this.state.name,
                selectedOption: this.state.selectedOption
            })
            e.target.reset()
            this.setState({
                name: '',
                selectedOption: '',
                errors: {}
            })
        } else {
            this.setState({ errors })
        }
    }

    validate = () => {
        const errors = {}

        if (!this.state.name) {
            errors.name = 'Please Provide a Name'
        } else if (this.state.name.length > 20) {
            errors.name = 'Name Too Long'
        }

        if (!this.state.selectedOption) {
            errors.selectedOption = 'Please Select One Option'
        }

        return {
            errors,
            isValid: Object.keys(errors).length === 0
        }
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <div className="d-flex">
                    <h4>Options</h4>
                    <Button className="ml-auto" color="warning" type="button" onClick={this.props.toggleModal}>Edit</Button>
                    <Button type="button" className="ml-2" onClick={() => this.props.deletePoll(this.props.poll.id)}>Delete</Button>
                </div>
                {
                    this.props.poll.options.map(opt => (
                        <FormGroup className="my-2" key={opt.id}>
                            <Label className="d-flex">
                                <Input
                                    type="radio"
                                    id={opt.id}
                                    name='selectedOption'
                                    value={opt.id}
                                    onChange={this.handleChange}
                                    invalid={this.state.selectedOption ? true : false}
                                />
                                {opt.value}
                                <span style={{ padding: '5px 20px', background: 'green', color: 'white', borderRadius: '5px' }} className='ml-auto'>
                                    {opt.vote}
                                </span>
                                <span
                                    style={{ padding: '5px 20px', background: 'orange', color: 'white', borderRadius: '5px' }}
                                    className='ml-2'
                                >
                                    {this.props.totalVote > 0 ? ((100 * opt.vote) / this.props.poll.totalVote).toFixed(2) : 0.00}%
                                </span>
                            </Label>
                        </FormGroup>
                    ))
                }
                <FormGroup className="my-3">
                    <Label>Enter Your Name</Label>
                    <Input
                        name="name"
                        placeholder="Your Name"
                        value={this.state.value}
                        onChange={this.handleChange}
                        invalid={this.state.errors.name ? true : false}
                    />
                    {this.state.errors.name && <FormFeedback>{this.state.errors.name}</FormFeedback>}
                </FormGroup>
                <Button type="submit">Submit Your Opinion</Button>
            </Form>
        );
    }
}

export default ParticipationForm;