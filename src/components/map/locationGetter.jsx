import React from 'react';
import MapContainer from './map_container';
import { fetchLocation } from '../../actions/location_actions';
import { connect } from 'react-redux';

class LocationGetter extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.clients.forEach((client) => {
            this.props.fetchLocation(client.zip_code.slice(0, 4));
        })
    }

    render() {
        return (
            <div>
                <h2 className="map-header">Client Org Locations</h2>
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