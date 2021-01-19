import React from 'react';
class MemberTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            memberToBeUpdated: {
                name: "Nobody"
            }
        }
    }
    
    handleClick(member) {
        this.setState({
            memberToBeUpdated: member
        });
    }

    render() {
        const members  = this.props.members;
        return (
            <div className="report-container">
                <h1>Update a Member's Organization ID</h1>
                <h5>{this.state.memberToBeUpdated.name}</h5>
                <div>
                <table className="client-table" style={{width:"100%"}}>
                    <tbody>
                    <tr className="top-row">
                        <th>Name</th>
                        <th>Title</th> 
                        <th>Phone Number</th>
                        <th>Organization ID</th>
                        <th>Update</th> 
                    </tr>
                        {members.map((member) => {
                            return (
                                <tr 
                                    className="member-tr"
                                    key={member.id}>
                                        <td>{member.name}</td>
                                        <td>{member.title}</td>
                                        <td>{member.phone_number}</td>
                                        <td>
                                            <input
                                                form="member-form"
                                                type="text"
                                                placeholder={member.organization_id}
                                            />
                                        </td>
                                        <td onClick={() => this.handleClick(member)}>
                                            <form 
                                                id="member-form"
                                                onSubmit={this.handleSubmit}
                                            >
                                                <input
                                                    className="update-button"
                                                    type="submit"
                                                    value="Update"
                                                >
                                                </input>
                                            </form>
                                        </td>
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

export default MemberTable