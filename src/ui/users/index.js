import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import * as usersActions from './actions';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {model: state.users}
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(usersActions, dispatch)}
}

class Users extends Component {
    render() {
        return <div className="container"/>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
