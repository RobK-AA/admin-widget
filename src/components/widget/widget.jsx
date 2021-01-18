import React from 'react';
import ClientTableContainer from '../client_table/client_table_container';
import Modal from '../../components/modal';
import MapContainer from '../map/map_container';
import LocationGetter from '../map/locationGetter';

class Widget extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: ""
        }
    }
    
    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            });
        };
    }

    componentWillMount() {
        this.props.fetchClients()
    }

    render() {
        const { display } = this.state;

        return (
            <div id="main-app">
                <h1>Admin Wizard</h1>
                <Modal>
                    <div 
                        style={{color:'black'}}
                    >
                    </div>
                </Modal>
                <button
                    value="clients"
                    onClick={this.update("display")}
                >Client Organizations</button>
                <button
                    value="map"
                    onClick={this.update("display")}
                >Map</button>
                <button
                    value="managers"
                    onClick={this.update("display")}
                >Managers</button>
                {this.state.display === 'clients' && 
                <ClientTableContainer style={{display: this.state.display === 'clients' ? 'block' : 'none'}} />}
                {this.state.display === 'map' && 
                <LocationGetter style={{display: this.state.display === 'map' ? 'block' : 'none'}} />}
            </div>
        )
    }
}

export default Widget;