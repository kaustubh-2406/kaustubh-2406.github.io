import React from "react";

export default function ({ content, color }) {
  const style = {
    backgroundColor: color,
  };

  return (
    <span
      className="rounded-full py-2 flex justify-center items-center px-3.5"
      style={style}
    >
      {content}
    </span>
  );
}
