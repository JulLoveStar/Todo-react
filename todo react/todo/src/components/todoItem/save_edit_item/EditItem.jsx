import React from "react";
import { useState } from "react";
import SaveBtn from "./SaveBtn";

export default function EditItem({ title, saveEdit }) {
  const [newTitle, setNewTitle] = useState(title);

  return (
    <div>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <SaveBtn onClick={() => saveEdit(newTitle)} />
    </div>
  );
}
