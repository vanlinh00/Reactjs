import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import UserForm from "./UserForm";
import UserList from "./UserList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: uuidv4(), name: "Alice", email: "alice@example.com" },
        { id: uuidv4(), name: "Bob", email: "bob@example.com" },
      ],
      editingUserId: null,
    };
  }

  handleAddUser = (user) => {
    const newUser = { id: uuidv4(), ...user };
    this.setState(({ users }) => ({
      users: [...users, newUser],
    }));
  };

  handleEdit = (id) => {
    this.setState({ editingUserId: id });
  };

  handleSaveEdit = (updatedUser) => {
    const { editingUserId } = this.state;
    this.setState(({ users }) => ({
      users: users.map((user) =>
        user.id === editingUserId ? { ...user, ...updatedUser } : user
      ),
      editingUserId: null,
    }));
  };

  handleCancelEdit = () => {
    this.setState({ editingUserId: null });
  };

  handleDeleteUser = (id) => {
    this.setState(({ users, editingUserId }) => ({
      users: users.filter((user) => user.id !== id),
      editingUserId: editingUserId === id ? null : editingUserId,
    }));
  };

  render() {
    const { users, editingUserId } = this.state;
    const editingUser = users.find((u) => u.id === editingUserId);

    return (
      <div style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "Arial, sans-serif" }}>
        <h1>User Manager</h1>

        {!editingUserId && (
          <>
            <h2>Add New User</h2>
            <UserForm onSubmit={this.handleAddUser} submitLabel="Add User" />
          </>
        )}

        {editingUserId && editingUser && (
          <>
            <h2>Edit User</h2>
            <UserForm
              isEditing
              initialName={editingUser.name}
              initialEmail={editingUser.email}
              onSubmit={this.handleSaveEdit}
              onCancel={this.handleCancelEdit}
              submitLabel="Save"
            />
          </>
        )}

        <h2>User List</h2>
        {users.length > 0 ? (
          <UserList users={users} onEdit={this.handleEdit} onDelete={this.handleDeleteUser} />
        ) : (
          <p>No users found.</p>
        )}
      </div>
    );
  }
}