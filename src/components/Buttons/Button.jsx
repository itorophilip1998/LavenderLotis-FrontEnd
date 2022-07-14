import React from "react";

function Button({ style, children, onClick }) {
  return (
    <button style={{ cursor: "pointer", ...style }} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
