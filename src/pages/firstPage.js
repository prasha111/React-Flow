import React, { useState } from 'react'
import Header from '../components/header'
import MessageBox from '../components/messageBox'
import { MessageProvider, useMessage } from '../components/messageProvider'
import NodesPanel from '../components/nodesPanel'
import ReactFlowSpace from '../components/reactFlowSpace'
import SettingPanelMessage from '../components/settingPanelMessage'
//import { ReactFlowProvider } from 'reactflow'
//import ReactFlowSpace from '../components/reactFlowSpace'

function FirstPage() {
  const [nodesPanel, setNodesPanel] = useState(true );
  const {openBox, setOpenBox} =  useMessage();
  return (
    <div>
      <Header/>
    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
        <div style={{width:'100%', height:'100%'}}>
       {/* <MessageBox/> */}
       <div class="check" style={{width:'100%', height:'100%'}}>
        scxscs
       <ReactFlowSpace/>
       </div>
  
        </div>
            {openBox ?
            <NodesPanel/> :
            <SettingPanelMessage/>
            }
    
    </div>
    </div>
  )
}

export default FirstPage