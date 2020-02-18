import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./Button.css";

export const Button = ({
  onClick,
  onSubmit,
  className,
  children,
  disabled,
  active,
  ...props
}) => {
  const classes = classNames("btn", { active }, className);

  return (
    <button
      {...props}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  children: "Default button",
  className: "",
  disabled: false,
  active: false
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool
};
