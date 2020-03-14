import consts from './consts';

const initialState = {
    userList: []
};

export default (state = {...initialState}, action) => {
    switch (action.type) {
        case consts.USER_SET:
        {
            return {
                ...state,
                ...action.model
            }
        }
        default:
            return {
                ...state
            }
    }
}
