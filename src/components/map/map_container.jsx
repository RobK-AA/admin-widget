import { connect } from "react-redux";
import Map from './map';
import { fetchLocation } from '../../actions/location_actions';

const mapStateToProps = ({ clients, locations }) => {
    return {
        clients,
        locations
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLocation: (zipCode) => dispatch(fetchLocation(zipCode)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);