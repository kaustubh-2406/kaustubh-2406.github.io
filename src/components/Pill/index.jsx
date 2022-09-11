import React from "react";

export default function ({ content, color, rounded }) {
  const style = {
    borderRadius: rounded ? "20%/50%" : "0%",
    backgroundColor: color,
    padding: "0.4rem 0.8rem",
  };

  return <span style={style}>{content}</span>;
}
