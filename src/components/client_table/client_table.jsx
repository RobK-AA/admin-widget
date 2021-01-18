import React from 'react';
import ClientProfileModalContainer from '../client_profile_modal/client_profile_modal_container';

class ClientTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedClientId: null,
            errors: {}
        }
        this.renderModal = this.renderModal.bind(this);
    }

    handleClick(clientId) {
        this.props.fetchClient(clientId).then(
            this.renderModal()).catch(
            errors =>
            this.setState({ errors }));
    }

    renderModal() {
        const modal = document.getElementById("myModal");
        const btn = document.getElementById("myBtn");
        // const span = document.getElementsByClassName("close")[0];
        const table = document.getElementsByClassName("client-table")[0];
        const mainApp = document.getElementById('main-app');
        let temp = table.style.display;
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.height = "100%";
        
        // span.onclick = function() {
        //     modal.style.display = "none";
        // }
        mainApp.onclick = function() {
            if (modal.style.display !== "none") {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
                document.body.style.height = "auto";
            } else {
                
                // modal.style.display = "block";
                // document.body.style.overflow = "auto";
                // document.body.style.height = "auto";
            }
            
        }
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    render() {
        const clients  = Object.values(this.props.clients);
        return (
            <div className="report-container">
                <h1>Registered client Report</h1>
                <ClientProfileModalContainer />
                <div>
                <table className="client-table" style={{width:"100%"}}>
                    <tbody>
                    <tr className="top-row">
                        <th>Name</th>
                        <th>Public/Private</th> 
                        <th>Headcount</th>
                    </tr>
                        {clients.map((client) => {
                            return (
                                <tr 
                                    className="client-tr"
                                    onClick={() => this.handleClick(client.id)}
                                    key={client.id}>
                                    <td>{client.name}</td>
                                    <td>{client.is_public ? "Public" : "Private"}</td>
                                    <td>{client.headcount}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default ClientTable;