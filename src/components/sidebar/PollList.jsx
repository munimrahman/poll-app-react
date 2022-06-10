import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class PollList extends React.Component {

    render() {
        if (this.props.polls.length === 0) {
            return <p>There is No Poll</p>
        }
        return (
            <ListGroup>
                {this.props.polls.map(poll => (
                    <ListGroupItem
                        key={poll.id}
                        onClick={() => this.props.selectPoll(poll.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        {poll.title.length > 30 ? poll.title.substr(0, 30) + '...' : poll.title}
                    </ListGroupItem>
                ))}
            </ListGroup>
        );
    }
}

export default PollList;