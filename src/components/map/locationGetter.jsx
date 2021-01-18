import React from 'react';
import MapContainer from './map_container';
import { fetchLocation } from '../../actions/location_actions';
import { connect } from 'react-redux';

class LocationGetter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            locations: {}
        }
    }

    componentWillMount() {
        this.props.clients.forEach((client) => {
            
            this.props.fetchLocation(client.zip_code.slice(0, 4));
        })
    }

    componentDidMount() {
        
    }

    render() {
        
        return (
            <div>
                <MapContainer />
            </div>
        )
    }
}

const mapStateToProps = ({ clients, locations }) => {
    return {
        clients, locations
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLocation: (zipCode) => dispatch(fetchLocation(zipCode)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationGetter);