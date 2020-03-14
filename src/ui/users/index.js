import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import * as usersActions from './actions';
import {connect} from 'react-redux';
import {Container, Table, Button, Modal, Form} from 'react-bootstrap'

function mapStateToProps(state) {
    return {model: state.users}
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(usersActions, dispatch)}
}

class Users extends Component {
    componentDidMount() {
        this.props.actions.init();
    }

    handleAddButton = (show) => (e) => {
        e.preventDefault();
        this.props.actions.showModal(show);
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        const form = document.forms.addUser;
        this.props.actions.addNewUser(form);
    };

    renderUserTable(userList) {
        return userList.map(user => {
            return <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
            </tr>
        });
    }

    render() {
        const {model: {userList, showForm}} = this.props;
        return <Container>
            <Table striped bordered>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>E-mail</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
                </thead>
                <tbody>{userList.length > 0 && this.renderUserTable(userList)}</tbody>
            </Table>
            <Button onClick={this.handleAddButton('show')}>Add user</Button>
            <Modal show={showForm} onHide={this.handleAddButton('hide')} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form name="addUser" onSubmit={this.handleFormSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name"/>
                        </Form.Group>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username"/>
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Email address"/>
                        </Form.Group>
                        <Form.Group controlId="formPhone">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="phone" placeholder="Phone number"/>
                        </Form.Group>
                        <Form.Group controlId="formWebsite">
                            <Form.Label>Website</Form.Label>
                            <Form.Control type="text" placeholder="Website"/>
                        </Form.Group>
                        <Button type="submit">Add</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
