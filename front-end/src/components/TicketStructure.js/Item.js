import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { deleteTicket } from "../../Actions";

const excerptHelper = text => {
  if (text.length > 100) {
    return text.slice(0, 100).concat(" . . .");
  } else {
    return text;
  }
};

const Item = props => {
  return (
    <div className="ticket-item">
      <div className="top-section">
        <div className="status">
          <p className="status-number">#{props.id}</p>
          <p
            className="status-resolved"
            style={
              props.resolved ? { background: `red` } : { background: `green` }
            }
          >
            {props.resolved ? "Closed" : "Open"}
          </p>
        </div>
        <div className="ticket-info">
          <Link to={`/tickets/${props.id}`}>
            <h1 className="ticket-title">{props.title}</h1>
          </Link>
          <p className="ticket-description">
            {excerptHelper(props.description)}
          </p>
        </div>
        <div className="delete-item">
          <i
            onClick={() => props.deleteTicket(props.id)}
            className="fas fa-trash"
          />
        </div>
      </div>
      <div className="bottom-section">
        <div className="meta-tags">
          <div className="buttons">
            {props.userRole ? (
              props.assigned ? (
                <button
                  onClick={() => props.assignTicket(props.id, props.ticket)}
                >
                  Unclaim
                </button>
              ) : (
                <button
                  onClick={() => props.assignTicket(props.id, props.ticket)}
                >
                  Claim
                </button>
              )
            ) : null}
          </div>
          <div>
            <p>Posted by: {props.createdBy}</p>
          </div>
          <div>
            <p>Topic: {props.category}</p>
          </div>
          <div>
            <p>{props.assigned ? "Assigned" : "Not Assigned"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { deleteTicket }
)(Item);