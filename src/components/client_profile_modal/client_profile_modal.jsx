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
                    <table style={{width:"max-content"}}>
                     <tbody>
                     <tr className="modal-row">
                         <th id="modal-col">ID</th>
                         <th id="modal-col-right">{this.props.selectedClient.id}</th> 
                     </tr>
                     <tr className="modal-row">
                         <th id="modal-col">Name</th>
                         <th id="modal-col-right">{this.props.selectedClient.name}</th> 
                     </tr>
                     <tr className="modal-row">
                         <th id="modal-col">Address</th>
                         <th id="modal-col-right">{this.props.selectedClient.address_1}</th> 
                     </tr>
                     <tr className="modal-row">
                         <th id="modal-col">City</th>
                         <th id="modal-col-right">{this.props.selectedClient.city}</th> 
                     </tr>
                     <tr className="modal-row">
                         <th id="modal-col">State</th>
                         <th id="modal-col-right">{this.props.selectedClient.state}</th> 
                     </tr>
                     <tr className="modal-row">
                         <th id="modal-col">Zip Code</th>
                         <th id="modal-col-right">{this.props.selectedClient.zip_code}</th> 
                     </tr>
                     <tr className="modal-row">
                         <th id="modal-col">Public Private</th>
                         <th id="modal-col-right">{this.props.selectedClient.is_public ? "Public" : "Private"}</th> 
                     </tr>
                     <tr className="modal-row">
                         <th id="modal-col">Headcount</th>
                         <th id="modal-col-right">{this.props.selectedClient.headcount}</th> 
                     </tr>
                     <tr className="modal-row">
                         <th id="modal-col">Record Date</th>
                         <th id="modal-col-right">{this.props.selectedClient.created_at}</th> 
                     </tr>
                     </tbody>
                 </table>
                </div>
            </div>
        )
    }
}

export default ClientProfileModal;