import { connect } from "react-redux";
import ClientProfileModal from '../client_profile_modal/client_profile_modal'
import { fetchClients, fetchClient } from '../../actions/client_actions';

const mapStateToProps = ({ clients, selectedClient, errors }) => {
    return {
        clients,
        selectedClient,
        errors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchClients: () => dispatch(fetchClients()),
        fetchClient: (clientId) => dispatch(fetchClient(clientId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientProfileModal);