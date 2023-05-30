import React, { useState } from "react";

function Project({ projectName, colorClass }) {
  const [checked, setChecked] = useState(false);
  return (
    <div className="checkbox-container">
      <input
        onChange={() => setChecked(!checked)}
        type="checkbox"
        className={colorClass}
        checked={checked}
      />
      <p className="label">{projectName}</p>
    </div>
  );
}

export default Project;
