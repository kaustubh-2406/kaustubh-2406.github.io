import React from "react";

export default function ({ list }) {
  return (
    <>
      {list.map((item) => (
        <Pill rounded content={item} color={"yellow"} />
      ))}
    </>
  );
}
