import React from "react";
import { BsMessenger, IoLogoWhatsapp } from "react-icons/bs";

function MessageBox() {
    
    return (
    <div style={{ width: "300px", paddingInline:'30px', borderRadius:'10px'}}>
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
    </div>
  );
}

export default MessageBox;
