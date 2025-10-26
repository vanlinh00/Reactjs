import { useState } from "react";

function useUsers() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingUserId, setEditingUserId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  const addUser = () => {
    if (!name || !email) {
      alert("Please fill name and email");
      return;
    }
    setUsers([...users, { id: Date.now(), name, email }]);
    setName("");
    setEmail("");
  };

  const startEdit = (user) => {
    setEditingUserId(user.id);
    setEditName(user.name);
    setEditEmail(user.email);
  };

  const saveEdit = () => {
    setUsers(users.map(user =>
      user.id === editingUserId ? { ...user, name: editName, email: editEmail } : user
    ));
    setEditingUserId(null);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return {
    users, name, setName, email, setEmail,
    editingUserId, editName, setEditName, editEmail, setEditEmail,
    addUser, startEdit, saveEdit, deleteUser
  };
}

export default useUsers;
