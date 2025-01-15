import React from "react";

const Button = ({ number, colors }) => {
  console.log(colors);
  let styles = {
    background: `linear-gradient(${colors[0]}, ${colors[1]})`,
  };

  return (
    <div className="button" style={styles}>
      <h3>{number}</h3>
    </div>
  );
};

export default Button;
