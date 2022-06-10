import React from "react";
import { Button, Input, Modal, ModalBody, ModalHeader } from "reactstrap";
import PollForm from "../poll-form";
import PollList from "./PollList";

class SideBar extends React.Component {
    state = {
        openModal: false
    }
    toggleModal = () => {
        this.setState({
            openModal: !this.state.openModal
        })
    }
    render() {
        return (
            <div style={{ background: '#efefef', padding: '10px' }}>
                <div className="d-flex justify-content-around mb-3">
                    <Input
                        type="search"
                        placeholder="Search"
                        className="w-75"
                        value={this.props.searchTerm}
                        onChange={e => this.props.handleSearch(e.target.value)}
                    />
                    <Button
                        color="success"
                        onClick={this.toggleModal}
                    >
                        New
                    </Button>
                </div>
                <h4 className="text-center">List Of Polls</h4>
                <hr />
                <PollList
                    polls={this.props.polls}
                    selectPoll={this.props.selectPoll}
                />
                <Modal
                    isOpen={this.state.openModal}
                    toggle={this.toggleModal}
                    unmountOnClose={true}
                >
                    <ModalHeader toggle={this.toggleModal}>
                        Create a New Poll
                    </ModalHeader>
                    <ModalBody>
                        <PollForm submit={this.props.addNewPoll} />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default SideBar;