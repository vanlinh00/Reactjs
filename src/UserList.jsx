import React, { Component } from "react";
import PropTypes from "prop-types";

class UserList extends Component {
  render() {
    const { users, onEdit, onDelete } = this.props;
    return (
      <ul>
        {users.map(({ id, name, email }) => (
          <li key={id}>
            <strong>{name}</strong> ({email}){" "}
            <button type="button" onClick={() => onEdit(id)}>
              Edit
            </button>{" "}
            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserList;