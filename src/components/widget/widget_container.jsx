import { connect } from "react-redux";
import Widget from './widget';
import { fetchClients } from '../../actions/client_actions';
import { fetchLocation } from '../../actions/location_actions';

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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Widget);