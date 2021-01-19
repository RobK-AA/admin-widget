import * as MemberAPIUtil from '../util/member_util';

export const RECEIVE_MEMBERS = 'RECEIVE_MEMBERS';
export const RECEIVE_MEMBER = 'RECEIVE_MEMBER';
export const RECEIVE_MEMBER_ERRORS = 'RECEIVE_MEMBER_ERRORS';

export const receiveMembers = members => {
    return {
        type: RECEIVE_MEMBERS,
        members
    }
}

export const receiveMember = member => {
    return {
        type: RECEIVE_MEMBER,
        member
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

export const updateMember = (memberId) => dispatch => {
    return MemberAPIUtil.updateMember(memberId).then(
        member => dispatch(receiveMembers(member),
        errors => {
            dispatch(receiveMemberErrors(errors.responseJSON))
        })
    )
};