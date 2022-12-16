import { width } from "@mui/system";
import React from "react";
import { useMessage } from "./messageProvider";
import { useRef } from "react";


function Header() {
  const ref = useRef()
  const { onSaveState, setOnSaveState, saveDataState, setSaveDataState } = useMessage();
  const handleClick = async() => {
    setOnSaveState(true)
    if(!saveDataState){
   
      ref.current.style.visibility  = "inherit";
    }
    else{
      ref.current.style.visibility  = "hidden";
    }
    

  }
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
     <div style={{display:'flex',justifyContent:'space-between', width:'50%'}}>
     <div ref={ref} style={{
          backgroundColor: "#FFC0CB",
          color: "purple",
          border: "1px solid",
          borderRadius: "10px",
          padding: "12px 20px",
          flex:'1',
          maxWidth:'150px', 
          visibility:'hidden'
        }}
      >
        Cannot Save Flow
      </div>
      <div onClick={()=>{ handleClick()}}
        style={{
          backgroundColor: "#D3D3D3",
          color: "purple",
          border: "1px solid",
          borderRadius: "10px",
          padding: "12px 20px",
          flex:'1',
          maxWidth:'100px'
        }}
      >
        Save Changes
      </div>
     </div>
      
    </div>
  );
}

export default Header;
