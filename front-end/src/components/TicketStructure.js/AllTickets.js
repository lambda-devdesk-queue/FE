import React from "react";
import { connect } from "react-redux";

import { deleteTicket } from "../../Actions";
import Dashboard1 from "../Dashboard/Dashboard1";
import { ItemDiv } from "../../Helper";
import Item from "./Item";

const test = props => {
  const ownedTickets = props.tickets.filter(
    ticket => ticket.user_id === props.user.user_id
  );
  const claimedTickets = props.tickets.filter(
    ticket => ticket.assigned_user === props.user.user_id
  );
  if (props.user.isAdmin) {
    return (
      <Dashboard1>
        <ItemDiv>
          {claimedTickets.map(ticket => (
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
            />
          ))}
        </ItemDiv>
      </Dashboard1>
    );
  } else {
    return (
      <Dashboard1>
        <ItemDiv>
          {ownedTickets.map(ticket => (
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
            />
          ))}
        </ItemDiv>
      </Dashboard1>
    );
  }
};

const mapStateToProps = state => {
  return {
    tickets: state.tickets,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { deleteTicket }
)(test);