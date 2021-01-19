import React from 'react';
import $ from 'jquery';

class MemberTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            memberId: "",
            newOrganizationId: "",
            memberName: "nobody"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const member = {
            organization_id: this.state.newOrganizationId
        }
        this.props.updateMember(member, this.state.memberId).then(() =>{
            this.props.history.push('/')
        }).catch(err => {
            alert(`I'm sorry, we could not update ${this.state.memberName}'s organization Id to ${this.state.newOrganizationId}. The server has responded with the following message: ${err.responseJSON}`)
            console.log(err);
        })
    }

    update(memberId, memberName) {
        return e => {
            this.setState({
                memberId: memberId,
                memberName: memberName,
                newOrganizationId: e.currentTarget.value
            });
        };
    }

    onSelect(memberId) {
        return this.props.members.forEach((member) => {
            if (member.id !== memberId) {
                $(`#input-${member.id}`).val("")
            }
        })
    }

    handleFocus(memberId, memberName) {
        return e => {
            this.setState({
                memberId: memberId,
                memberName: memberName,
                newOrganizationId: e.currentTarget.value
            });
        };
    }

    render() {
        const members  = this.props.members;
        return (
            <div className="report-container">
                <h1>Update a Member's Organization ID</h1>
                <div>
                <table className="client-table" style={{width:"100%"}}>
                    <tbody>
                    <tr className="top-row">
                        <th>Name</th>
                        <th>Title</th> 
                        <th>Phone Number</th>
                        <th>Organization ID</th>
                        <th>Update</th> 
                    </tr >
                        {members.map((member) => {
                            return (
                                <tr id={`row-${member.id}`}
                                    onClick={() => this.onSelect(member.id)}
                                    className="member-tr"
                                    key={member.id}>
                                        <td>{member.name}</td>
                                        <td>{member.title}</td>
                                        <td>{member.phone_number}</td>
                                        <td>
                                            <input
                                                onFocus={this.handleFocus(member.id, member.name)}
                                                onChange={this.update(member.id, member.name)}
                                                id={`input-${member.id}`}
                                                form="member-form"
                                                type="text"
                                                placeholder={member.organization_id}
                                            />
                                        </td>
                                        <td>
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