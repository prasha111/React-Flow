import React from "react";
import { BsMessenger } from "react-icons/bs";

function NodesPanel() {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "25%",
        height: "100vh",
        border: "1px solid #DEDEDE",
        padding: "10px",
      }}
    >
      <div
        style={{
          border: "1px solid",
          padding: "20px 20px",
          width: "fit-content",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onDragStart={(event) => onDragStart(event, "input")}
        draggable
      >
        <BsMessenger />
        Message
      </div>
    </div>
  );
}

export default NodesPanel;
