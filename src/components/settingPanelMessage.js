import React from "react";
import { useMessage } from "./messageProvider";
import jsonData from './messageData';

export default function SettingPanelMessage() {
  const { inputText, setInputText,selectedNodeId ,setSelectedNodeId, } = useMessage()
  const setTextInput=(props)=>{
    console.log(selectedNodeId, "sele")
    if(selectedNodeId !== 0){
      jsonData.map((component, index)=>{
        //console.log(component.id, selectedNodeId, "checking")
        if(component.id === selectedNodeId)
          {jsonData[index].data.value = props} 
       
      })
      setInputText(props)
    }
   
  }
  return(
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
 
     <div style={{display:'flex', flexDirection:'row', columnGap:'20px', borderBottom:'1px solid #DEDEDE'}}>
    <div style={{ width: "7%", float:'left', flex:'1'}}>
      
        <svg width={'20px'}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
     </div>
      <div style={{alignItems:'center', flex:'1'}}>Message</div>
      <div style={{flex:'1'}}>
      </div>
      </div>
      <div>
        text
      </div>
      <div style={{marginBottom:'40px', paddingBottom:'20px', borderBottom:'1px solid #DEDEDE'}}>
      <textarea style={{height:'100px'}} onChange={(event)=>{setTextInput(event.target.value)}}></textarea>
      </div>
    </div>
  
 
  )
}
