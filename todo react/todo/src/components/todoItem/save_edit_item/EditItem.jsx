import React from "react";

export default function EditItem({ value, setValue}) {

  return (
        <div>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
  );
}
