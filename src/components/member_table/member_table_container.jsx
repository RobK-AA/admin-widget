import { connect } from "react-redux";
import MemberTable from './member_table';
import { fetchClients } from '../../actions/client_actions';
import { fetchLocation } from '../../actions/location_actions';
import { fetchMembers } from '../../actions/manager_actions';
import { updateMember } from '../../actions/member_actions';

const mapStateToProps = ({ members }) => {
    return { members }
}

const mapDispatchToProps = dispatch => {
    return {
        updateMember: (member, memberId) => dispatch(updateMember(member, memberId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberTable);