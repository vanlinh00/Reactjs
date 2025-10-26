import React from "react";

function UserList({
  users,
  editingUserId,
  editName,
  editEmail,
  setEditName,
  setEditEmail,
  startEdit,
  saveEdit,
  deleteUser
}) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {editingUserId === user.id ? (
            <>
              <input value={editName} onChange={e => setEditName(e.target.value)} />
              <input value={editEmail} onChange={e => setEditEmail(e.target.value)} />
              <button onClick={saveEdit}>Save</button>
              <button onClick={() => setEditName(null)}>Cancel</button>
            </>
          ) : (
            <>
              {user.name} ({user.email})
              <button onClick={() => startEdit(user)}>Edit</button>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default UserList;
