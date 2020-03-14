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

export function showModal(show) {
    return async (dispatch, getState) => {
        let {users: {showForm}} = getState();
        switch (show) {
            case 'show':
                showForm = true;
                break;
            case 'hide':
                showForm = false;
                break;
            default:
                showForm = !showForm;
        }
        set({showForm}, dispatch)
    }
}

export function addNewUser(form) {
    return async (dispatch, getState) => {
        let {users: {userList}} = getState();
        let newId = userList.length + 1;
        userList.push({
            id: newId,
            name: form.formName.value,
            username: form.formUsername.value,
            email: form.formEmail.value,
            phone: form.formPhone.value,
            website: form.formWebsite.value
        });
        set({userList, showForm: false}, dispatch);
    }
}
