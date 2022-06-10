import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import PollForm from "../poll-form";
import ParticipationForm from "./participation-form";

class MainContent extends React.Component {
    state = {
        openModal: false
    }
    toggleModal = () => {
        this.setState({
            openModal: !this.state.openModal
        })
    }
    render() {
        if (Object.keys(this.props.poll).length === 0) {
            return (
                <div>
                    <h3>Welcome to My Application</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae nostrum, quia nemo cumque tempore maiores nam praesentium aliquam doloremque consequuntur? At enim aut, nemo corporis ut, tenetur ex illum nam accusamus perferendis minima ea laboriosam atque molestiae iusto libero sint.</p>
                </div>
            )
        }
        const { poll, getOpinion, updatePoll, deletePoll } = this.props
        return (
            <div>
                <h3>{poll.title}</h3>
                <p>{poll.description}</p>
                <br />
                <ParticipationForm
                    poll={poll}
                    getOpinion={getOpinion}
                    toggleModal={this.toggleModal}
                    deletePoll={deletePoll}
                />
                <Modal
                    isOpen={this.state.openModal}
                    toggle={this.toggleModal}
                    unmountOnClose={true}
                >
                    <ModalHeader toggle={this.toggleModal}>
                        Update Poll
                    </ModalHeader>
                    <ModalBody>
                        <PollForm
                            poll={poll}
                            isUpdate={true}
                            submit={updatePoll}
                            buttonValue='Update Poll'
                        />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default MainContent;