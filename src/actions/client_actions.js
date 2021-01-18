import * as ClientAPIUtil from '../util/client_util';
export const RECEIVE_CLIENTS = 'RECEIVE_CLIENTS';
export const RECEIVE_CLIENT = 'RECEIVE_CLIENT';
export const RECEIVE_CLIENT_ERRORS = 'RECEIVE_CLIENT_ERRORS';

export const receiveClients = clients => {
    return {
        type: RECEIVE_CLIENTS,
        clients
    }
}

export const receiveClient = client => {
    return {
        type: RECEIVE_CLIENT,
        client
    }
}

const receiveClientErrors = errors => {
    return {
        type: RECEIVE_CLIENT_ERRORS,
        errors
    }   
};

export const fetchClients = () => dispatch => {
    return ClientAPIUtil.fetchClients().then(
        clients => dispatch(receiveClients(clients),
        errors => {
            dispatch(receiveClientErrors(errors.responseJSON))
        })
    )
};

export const fetchClient = (clientId) => dispatch => {
    return ClientAPIUtil.fetchClient(clientId).then(
        client => dispatch(receiveClient(client),
        errors => {
            dispatch(receiveClientErrors(errors.responseJSON))
        })
    )
};