import consts from './consts';
import {get} from './services';

const set = (model, dispatch) => {
    dispatch({type: consts.USER_SET, model: model})
};

export function init() {
    return async (dispatch, getState) => {
        let {users: {userList}} = getState();
        try {
            userList = await get();
            set({userList}, dispatch);
        } catch (e) {
            throw new Error(e);
        }
    }
}
