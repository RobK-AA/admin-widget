import { RECEIVE_MEMBERS } from '../actions/member_actions';

const MembersReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState = [];
  switch(action.type) {
    case RECEIVE_MEMBERS:
        action.members.forEach(member => {
            newState.push(member);
        })
        return newState;
    default:
        return oldState;
  }
};

export default MembersReducer;