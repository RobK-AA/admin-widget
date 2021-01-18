import { connect } from "react-redux";
import ManagerTable from './manager_table';
import { fetchClients, fetchClient } from '../../actions/client_actions';

const mapStateToProps = ({ clients, managers }) => {
    return { clients, managers }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchClients: () => dispatch(fetchClients()),
        fetchClient: (clientId) => dispatch(fetchClient(clientId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagerTable);