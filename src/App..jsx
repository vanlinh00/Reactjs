import React from "react";
import { useUsers } from "./hooks/useUsers";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const { users, addUser, updateUser, deleteUser } = useUsers();

  return (
    <div>
      <h1>User Manager</h1>
      <UserForm onAdd={addUser} />
      <UserList users={users} onUpdate={updateUser} onDelete={deleteUser} />
    </div>
  );
}

export default App;
