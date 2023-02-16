import React from "react";
import "./button.css";

export default function Button({ btnText, onClick, disabled }) {
  return (
    <button onClick={onClick} className="next-btn" disabled={disabled}>
      {" "}
      {btnText}
    </button>
  );
}
