import React from 'react';

class ManagerTable extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { managers } = this.props;
        const clients = Object.values(this.props.clients);
        const clientOrgIds = clients.map(client => client.id);
        return (
            <div className="report-container">
                <h1>Managers at Client Orgs</h1>
                <div>
                <table className="client-table" style={{width:"100%"}}>
                    <tbody>
                    <tr className="top-row">
                        <th>Name</th>
                        <th>Company ID</th>
                        <th>Company</th> 
                        <th>Phone Number</th>
                        <th>Existing Client?</th>
                    </tr>
                        {managers.map((manager) => {
                            const orgId = parseInt(manager.organization_id.replace(/\D/g, ""));
                            return (
                                <tr 
                                    className="manager-tr"
                                    key={manager.id}>
                                    <td>{manager.name}</td>
                                    <td>{orgId}</td>
                                    <td>{orgId > clients.length ? 
                                        `Name of Company with ID ${orgId} not provided` : 
                                        clients[orgId - 1].name}</td>
                                    <td>{manager.phone_number}</td>
                                    <td>{clientOrgIds.includes(orgId) ? 
                                        "True" : "False"}</td>
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

export default ManagerTable;