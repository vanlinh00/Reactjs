import React from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import useUsers from "./hooks/useUsers";

function App() {
  const {
    users,
    name, setName,
    email, setEmail,
    addUser,
    editingUserId,
    editName, setEditName,
    editEmail, setEditEmail,
    startEdit,
    saveEdit,
    deleteUser
  } = useUsers();

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Manager</h1>

      <UserForm
        name={name}
        email={email}
        setName={setName}
        setEmail={setEmail}
        addUser={addUser}
      />

      <UserList
        users={users}
        editingUserId={editingUserId}
        editName={editName}
        editEmail={editEmail}
        setEditName={setEditName}
        setEditEmail={setEditEmail}
        startEdit={startEdit}
        saveEdit={saveEdit}
        deleteUser={deleteUser}
      />
    </div>
  );
}

export default App;
