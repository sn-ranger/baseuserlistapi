import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import * as usersActions from './actions';
import {connect} from 'react-redux';
import {Container, Table} from 'react-bootstrap'

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
        const {model: {userList}} = this.props;
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
        </Container>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
