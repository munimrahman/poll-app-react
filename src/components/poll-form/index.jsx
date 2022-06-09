import React from "react";
import shortid from "shortid";

const defaultOptions = [
    { id: shortid.generate(), value: '', vote: 0 },
    { id: shortid.generate(), value: '', vote: 0 }
]
class PollForm extends React.Component {
    state = {
        title: '',
        description: '',
        options: defaultOptions,
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleOptionChange = (e, i) => {
        const options = [...this.state.options]
        options[i].value = e.target.value
        this.setState({ options })
    }

    createOption = () => {
        const { options } = this.state
        if (options.length < 5) {
            options.push(
                { id: shortid.generate(), value: '', vote: 0 }
            )
        } else {
            alert('You can create max 5 options')
        }
    }
    deleteOption = i => {
        const { options } = this.state
        if (options.length > 2) {
            {
                options.splice(i, 1)
                this.setState({ options })
            }
        } else {
            alert("You must have at lest 2 options")
        }
    }
    handleSubmit = e => {
        e.preventDefault()
        const { isValid, errors } = this.validate()

        if (isValid) {
            const { title, description, options } = this.state
            this.props.submit({
                title,
                description,
                options
            })
            e.target.reset()

            this.setState({
                title: '',
                description: '',
                options: defaultOptions,
                errors: []
            })
        } else {
            this.setState({ errors })
        }
    }

    validate = () => {
        const errors = {}
        const { title, description, options } = this.state
        if (!title) {
            errors.title = 'Please Provide a Title'
        } else if (title.length < 20) {
            errors.title = 'Title Too Short'
        } else if (title.length > 100) {
            errors.title = 'Title Too Long'
        }

        if (!description) {
            errors.description = 'Please Provide a Description'
        } else if (description.length > 500) {
            errors.description = 'Description Too Long'
        }

        const optionErrors = []
        options.forEach((opt, i) => {
            if (!opt.value) {
                optionErrors[i] = 'Option Text Empty'
            } else if (opt.value.length > 100) {
                optionErrors[i] = 'Option Text Too Long'
            }
        })

        if (optionErrors.length > 0) {
            errors.options = optionErrors
        }

        return {
            errors,
            isValid: Object.keys(errors).length === 0
        }
    }
}

export default PollForm;