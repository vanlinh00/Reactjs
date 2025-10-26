// src/components/UserItem.jsx
import { useState } from "react";

function UserItem({ user, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ name: user.name, email: user.email });

  const saveEdit = () => {
    onUpdate(user.id, editData);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input value={editData.name} onChange={e => setEditData({ ...editData, name: e.target.value })} />
          <input value={editData.email} onChange={e => setEditData({ ...editData, email: e.target.value })} />
          <button onClick={saveEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          {user.name} ({user.email})
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(user.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default UserItem;
