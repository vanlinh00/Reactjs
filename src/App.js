import React, { useState } from "react";   //1. Import React and useState Hook


function App()  //2. Function Component Declaration

 {       //3. React State Declarations

  const [users, setUsers] = useState([
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
  ]);

  //Form inputs state

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

//Editing state

  const [editingUserId, setEditingUserId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  const addUser = () => {  //4. Add User Function
    if (!name || !email) {
      alert("Please fill name and email");
      return;
    }
    const newUser = {
      id: users.length + 1,
      name,
      email,
    };
    setUsers([...users, newUser]);
    setName("");
    setEmail("");
  };

  //5. Start Edit Function

  const startEdit = (user) => {
    setEditingUserId(user.id);
    setEditName(user.name);
    setEditEmail(user.email);
  };

  //6. Save Edit Function
  const saveEdit = () => {
    setUsers(users.map(user => user.id === editingUserId
      ? { ...user, name: editName, email: editEmail }
      : user
    ));
    setEditingUserId(null);
  };

//7. JSX (UI Structure)
//This JSX is rendered UI.

  return (
    <div>
      <h1>User Manager</h1>

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

      {/* Called when Add User button is clicked. */}

      <button onClick={addUser}>Add User</button>  

      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {editingUserId === user.id ? (
              <>
                <input 
                  value={editName} 
                  onChange={e => setEditName(e.target.value)} 
                />
                <input 
                  value={editEmail} 
                  onChange={e => setEditEmail(e.target.value)} 
                />
                                 {/* Called when Edit button of a user is clicked. */}

                <button onClick={saveEdit}>Save</button>
                <button onClick={() => setEditingUserId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {user.name} ({user.email})
                 {/* Called when Edit button of a user is clicked. */}
                <button onClick={() => startEdit(user)}>Edit</button>   
                <button onClick={() => setUsers(users.filter(u => u.id !== user.id))}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;