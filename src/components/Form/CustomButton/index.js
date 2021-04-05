import React from "react";
import "./custom-button.scss";

export default function CustomButton({ children, ...restProps }) {
  return (
    <div className="generic-button">
      <button {...restProps}>{children}</button>
    </div>
  );
}
