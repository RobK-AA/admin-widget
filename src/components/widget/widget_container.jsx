import { connect } from "react-redux";
import Widget from './widget';
import { fetchClients } from '../../actions/client_actions';
import { fetchLocation } from '../../actions/location_actions';
import { fetchMembers } from '../../actions/manager_actions';

const mapStateToProps = ({ clients, locations, errors }) => {
    return {
        clients,
        locations,
        errors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchClients: () => dispatch(fetchClients()),
        fetchLocation: (zipCode) => dispatch(fetchLocation(zipCode)),
        fetchManagers: () => dispatch(fetchMembers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Widget);