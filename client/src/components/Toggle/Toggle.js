import React from "react";

import "./Toggle.scss";

function Toggle(props) {
  return (
    <div className="dark-mode__toggle">
      <div
        onClick={props.toggleDarkMode}
        className={props.darkMode ? "toggle toggled" : "toggle"}
      />
    </div>
  );
}

export default Toggle;
