import React from "react";
import { useMessage } from "./messageProvider";

function Header() {
  const { onSaveState, setOnSaveState } = useMessage();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "92%",
        backgroundColor: "#DEDEDE",
        justifyContent: "flex-end",
        padding: "10px 80px",
      }}
    >
      <div onClick={()=>{setOnSaveState(true)}}
        style={{
          backgroundColor: "#D3D3D3",
          color: "purple",
          border: "1px solid",
          borderRadius: "10px",
          padding: "12px 20px",
        }}
      >
        Save Changes
      </div>
    </div>
  );
}

export default Header;
