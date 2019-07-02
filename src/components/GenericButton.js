import React from "react";
import classnames from "classnames";
import propTypes from "prop-types";

const GenericButton = ({ className, ...props }) => {
  const classes = classnames("btn", className);

  return <button className={classes} {...props} />;
};

GenericButton.propTypes = {
  type: propTypes.string
};

GenericButton.defaultProps = {
  type: "button"
};

export default GenericButton;
