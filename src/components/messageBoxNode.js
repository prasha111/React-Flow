//import { style } from "@mui/system";
import React from "react";
import { BsMessenger, IoLogoWhatsapp } from "react-icons/bs";
import { Handle, Position } from 'reactflow';

function MessageBoxNode(props) {
  // const {id, stringGiven} = props
  console.log(props.data, "props", props.id)
   
    return (
   <>
  <div style={{ width: "300px", paddingInline:'0px', borderRadius:'10px', }}>
  <Handle type="target" position={Position.Left} id="a"  style={{padding:'0px'}}/>
      <div style={{ display: "flex",height:'fit-content', flexDirection: "row", alignItems:'center', backgroundColor:'#90e0ef', justifyContent:'space-between'  }}>
      
        <div style={{display:'flex', flexDirection:'row', columnGap:'10px', alignItems:'center'}}>
        <BsMessenger />
        <div style={{whiteSpace:'nowrap'}}>Send Message</div>
        </div>
        <BsMessenger />
      </div>
      <Handle type="source" position={Position.Right} id="b" />

      <div style={{backgroundColor:'#F5F5F5', paddingBottom:'50px'}}>
        {props?.data?.value }
      </div>

    </div>
    </>
  );
}

export default MessageBoxNode;
