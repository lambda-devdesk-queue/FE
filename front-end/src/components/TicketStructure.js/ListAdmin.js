
import React from "react";
import { connect } from "react-redux";

import { ItemDiv } from "../../Helper";

import Item from "./Item";
import { getData, assignTicket } from "../../Actions";
import Dashboard2 from "../Dashboard/Dashboard2";

class ListAdmin extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  assignTicket = (id, ticket) => {
    this.props.assignTicket(id, ticket);
  };

  render() {
    return (
      <Dashboard2 loggedUser={this.props.user}>
        <ItemDiv>
          {this.props.tickets.map(ticket => (
            <Item
              key={ticket.id}
              id={ticket.id}
              ticket={ticket}
              title={ticket.title}
              category={ticket.category}
              createdBy={ticket.user_id}
              assigned={ticket.assigned}
              resolved={ticket.resolved}
              assignedUser={ticket.assigned_user}
              description={ticket.description}
              assignTicket={this.assignTicket}
              userRole={this.props.user.isAdmin}
            />
          ))}
        </ItemDiv>
      </Dashboard2>
    );
  }
}

const mapStateToProps = state => {
  return {
    tickets: state.tickets,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { getData, assignTicket }
)(ListAdmin);