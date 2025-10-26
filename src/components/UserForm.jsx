import React from "react";

function UserForm({ name, email, setName, setEmail, addUser }) {
  return (
    <div>
      <h2>Add New User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={addUser}>Add User</button>
    </div>
  );
}

export default UserForm;
