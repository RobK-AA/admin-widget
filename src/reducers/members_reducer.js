import { RECEIVE_MEMBERS } from '../actions/manager_actions';

const ManagersReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState = [];
  switch(action.type) {
    case RECEIVE_MEMBERS:
        Object.values(action.members).forEach((member) => {
            if (member.title === "Manager") newState.push(member);
        });
        return newState;
    default:
        return oldState;
  }
};

export default ManagersReducer;