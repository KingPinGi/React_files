import React from "react";

const DemoOutput = (props) => {
  console.log("HELLO TROBLE");
  return <p>{props.show ? "This is New!" : ""}</p>;
};

export default React.memo(DemoOutput);