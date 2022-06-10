import React from "react";
import { Col, Container, Row } from "reactstrap";
import shortid from "shortid";
import MainContent from "./components/main-content";
import SideBar from "./components/sidebar";
import POLLS from "./data/polls";

class App extends React.Component {
    state = {
        polls: [],
        selectPoll: {},
        searchTerm: ''
    }
    componentDidMount() {
        this.setState({ polls: POLLS })
    }

    addNewPoll = poll => {
        poll.id = shortid.generate()
        poll.created = new Date()
        poll.totalVote = 0
        poll.opinions = []

        this.setState({
            polls: this.state.polls.concat(poll)
        })
    }

    updatePoll = updatedPoll => {
        const polls = [this.state.polls]
        const poll = polls.find(p => p.id === updatedPoll.id)

        poll.title = updatedPoll.title
        poll.description = updatedPoll.description
        poll.option = updatedPoll.option

        this.setState({ polls })
    }
    deletePoll = pollId => {
        const polls = this.state.polls.filter(p => p.id !== pollId)
        this.setState({ polls, selectPoll: {} })
    }
    selectPoll = pollId => {
        const poll = this.state.polls.find(p => p.id === pollId)
        this.setState({ selectPoll: poll })
    }
    handleSearch = searchTerm => {
        this.setState({ searchTerm })
    }
    performSearch = () => {
        return this.state.polls.filter(poll => poll.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }
    getOpinion = res => {
        const { polls } = this.state
        const poll = polls.find(p => p.id === res.pollId)
        const option = poll.options.find(o => o.id === res.selectedOption)

        poll.totalVote++
        option.vote++
        const opinion = {
            id: shortid.generate(),
            name: res.name,
            selectedOption: res.selectedOption
        }

        poll.opinions.push(opinion)

        this.setState({ polls })
    }
    render() {
        const polls = this.performSearch()
        return (
            <Container className="my-5">
                <Row>
                    <Col md={4}>
                        <SideBar
                            polls={polls}
                            searchTerm={this.state.searchTerm}
                            handleSearch={this.handleSearch}
                            selectPoll={this.selectPoll}
                            addNewPoll={this.addNewPoll}
                        />
                    </Col>
                    <Col md={8}>
                        <MainContent
                            poll={this.state.selectPoll}
                            getOpinion={this.getOpinion}
                            updatePoll={this.updatePoll}
                            deletePoll={this.deletePoll}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;