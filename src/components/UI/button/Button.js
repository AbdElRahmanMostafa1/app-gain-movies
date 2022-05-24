import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, ...props }) => {
  const btnClasses = `${styles.btn} ${props.className}`;

  return (
    <button {...props} className={btnClasses}>
      {" "}
      {children}{" "}
    </button>
  );
};

export default Button;
