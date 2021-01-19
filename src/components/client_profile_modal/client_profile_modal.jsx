import React from 'react';

class ClientProfileModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            selectedUserId: null
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ selectedUser: nextProps.selectedClient })
    }

    render() {
        
        return (
            <div id="myModal" className="modal" >
                <div className="modal-content">
                    <span className="close">x</span>
                    <h2 className="selected-client">Client: {this.props.selectedClient.name}</h2>
                    <table style={{width:"100%"}}>
                     <tbody>
                     <tr className="top-row">
                         <th>ID</th>
                         <th>{this.props.selectedClient.id}</th> 
                     </tr>
                     <tr className="top-row">
                         <th>Name</th>
                         <th>{this.props.selectedClient.name}</th> 
                     </tr>
                     <tr className="top-row">
                         <th>Address</th>
                         <th>{this.props.selectedClient.address_1}</th> 
                     </tr>
                     <tr className="top-row">
                         <th>City</th>
                         <th>{this.props.selectedClient.city}</th> 
                     </tr>
                     <tr className="top-row">
                         <th>State</th>
                         <th>{this.props.selectedClient.state}</th> 
                     </tr>
                     <tr className="top-row">
                         <th>Zip Code</th>
                         <th>{this.props.selectedClient.zip_code}</th> 
                     </tr>
                     <tr className="top-row">
                         <th>Public Private</th>
                         <th>{this.props.selectedClient.is_public ? "Public" : "Private"}</th> 
                     </tr>
                     <tr className="top-row">
                         <th>Headcount</th>
                         <th>{this.props.selectedClient.headcount}</th> 
                     </tr>
                     <tr className="top-row">
                         <th>Record Date</th>
                         <th>{this.props.selectedClient.created_at}</th> 
                     </tr>
                     </tbody>
                 </table>
                </div>
            </div>
        )
    }
}

export default ClientProfileModal;