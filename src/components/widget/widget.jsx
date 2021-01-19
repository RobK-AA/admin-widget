import React from 'react';
import ClientTableContainer from '../client_table/client_table_container';
import Modal from '../../components/modal';
import ManagerTableContainer from '../manager_table/manager_table_container';
import LocationGetter from '../map/locationGetter';
import MemberTableContainer from '../member_table/member_table_container';

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
        this.props.fetchClients();
        this.props.fetchManagers();
    }

    render() {
        const { display } = this.state;

        return (
            <div id="main-app">
                <h1 id="main-title">Admin Wizard</h1>
                <div id="dashboard-container">
                    <div id="dashboard">
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
                    <button
                        value="edit"
                        onClick={this.update("display")}
                    >Edit Member Organization ID</button>
                </div>
                </div>
                {this.state.display === 'clients' && 
                <ClientTableContainer style={{display: this.state.display === 'clients' ? 'block' : 'none'}} />}
                {this.state.display === 'map' && 
                <LocationGetter style={{display: this.state.display === 'map' ? 'block' : 'none'}} />}
                {this.state.display === 'managers' && 
                <ManagerTableContainer style={{display: this.state.display === 'map' ? 'block' : 'none'}} />}
                {this.state.display === 'edit' && 
                <MemberTableContainer style={{display: this.state.display === 'map' ? 'block' : 'none'}} />}
                <div className="footer"></div>
            </div>
        )
    }
}

export default Widget;