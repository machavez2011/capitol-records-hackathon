import React from "react";

export default function WebCamWrapper(props) {
  return (
    <div style={{ position: "relative" }}>
      {props.children}
      <input
        type="button"
        style={{ position: "absolute", bottom: "2%", right: "1%" }}
        className="btn btn-lg btn-success"
        value="Start" //Make button do stuff.
      />
    </div>
  );
}
