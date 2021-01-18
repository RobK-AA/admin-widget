import { connect } from "react-redux";
import ClientTable from './client_table';
import { fetchClients, fetchClient } from '../../actions/client_actions';

const mapStateToProps = ({ clients, errors }) => {
    return {
        clients,
        errors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchClients: () => dispatch(fetchClients()),
        fetchClient: (clientId) => dispatch(fetchClient(clientId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientTable);