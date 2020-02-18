import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./Input.css";

export const Input = ({ className, id, type, ...props }) => {
  const classes = classNames(className);

  return <input {...props} type={type} className={classes} name={id} />;
};

Input.defaultProps = {
  className: "",
  id: "",
  type: "text"
};

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string
};
