//import { style } from "@mui/system";
import React from "react";
import { BsMessenger, IoLogoWhatsapp } from "react-icons/bs";
import { Handle, Position } from 'reactflow';

function MessageBoxNode(props) {
   
    return (
   <>
  <div style={{ width: "300px", paddingInline:'30px', borderRadius:'10px', }}>
          <Handle type="source" position={Position.Top} id="a" />
      <div style={{ display: "flex",height:'fit-content', flexDirection: "row", alignItems:'center', backgroundColor:'#90e0ef', justifyContent:'space-between'  }}>
        <div style={{display:'flex', flexDirection:'row', columnGap:'10px', alignItems:'center'}}>
        <BsMessenger />
        <div style={{whiteSpace:'nowrap'}}>Send Message</div>
        </div>
        <BsMessenger />
      </div>
      <div style={{backgroundColor:'#F5F5F5', paddingBottom:'50px'}}>
        test message 2
      </div>
      <Handle type="source" position={Position.Bottom} id="b" />

    </div>
    </>
  );
}

export default MessageBoxNode;
