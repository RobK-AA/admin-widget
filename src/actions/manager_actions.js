import * as MemberAPIUtil from '../util/manager_util';
export const RECEIVE_MEMBERS = 'RECEIVE_MEMBERS';
export const RECEIVE_MEMBER_ERRORS = 'RECEIVE_MEMBER_ERRORS';

export const receiveMembers = members => {
    return {
        type: RECEIVE_MEMBERS,
        members
    }
}

const receiveMemberErrors = errors => {
    return {
        type: RECEIVE_MEMBER_ERRORS,
        errors
    }   
};

export const fetchMembers = () => dispatch => {
    return MemberAPIUtil.fetchMembers().then(
        members => dispatch(receiveMembers(members),
        errors => {
            dispatch(receiveMemberErrors(errors.responseJSON))
        })
    )
};
