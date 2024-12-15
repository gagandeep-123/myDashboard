import React from "react";

const ProgressBar = ({ progress, label }) => {
  const containerStyles = {
    height: "6px",
    width: "100%",
    backgroundColor: "#f0f0f0",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
  };

  const fillerStyles = {
    height: "100%",
    width: `${progress}%`,
    background: "linear-gradient(to right, #6a11cb, #2575fc)",
    textAlign: "center",
    transition: "width 0.5s ease-in-out",
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div>
      <div style={containerStyles}>
        <div style={fillerStyles}>{`${progress}`}</div>
      </div>
    </div>
  );
};

export default ProgressBar;
