import React from 'react';
import MapContainer from './map_container';
import { fetchLocation } from '../../actions/location_actions';
import { connect } from 'react-redux';

class LocationGetter extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const clients = this.props.clients;
        clients.forEach((client) => {
            this.props.fetchLocation(client.zip_code);
        })
    }

    render() {
        return (
            <div id="map-container">
                <h1 className="map-header">Client Organization Locations</h1>
                <h5 className="warning">Please note these locations are based on the zip code input, which may be erroneous. Erroneous zip codes may not correspond to actual locations and thus, may not be displayed. Please make sure you verify the zip code of each client to view the most accurate map!</h5>
                <MapContainer />
            </div>
        )
    }
}

const mapStateToProps = ({ clients }) => ({ clients });

const mapDispatchToProps = dispatch => {
    return {
        fetchLocation: (zipCode) => dispatch(fetchLocation(zipCode)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationGetter);