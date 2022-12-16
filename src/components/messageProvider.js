import React from 'react';
import { useState, useContext, useMemo } from "react";


const  MessageContext = React.createContext();
export function MessageProvider({children}){
const [saveError, setSaveError] = useState(false);
const [inputText, setInputText] = useState(null);
const [selectedNodeId, setSelectedNodeId] = useState(null);
const [openBox, setOpenBox] = useState(true)
const [onSaveState, setOnSaveState] = useState(false);
const [saveDataState, setSaveDataState]= useState(true)
const [messageData, setMessageData] = useState([
    {
        "id": "node1",
        "type": "textUpdater",
        "position": { x: 0, y: 0},
        "data": { "value": "Set some random Value"}
    }
])
const value  =  useMemo(function(){
    return {
        openBox,
        messageData, 
        setMessageData,
        setOpenBox,
        saveError, 
        setSaveError,
        onSaveState, 
        setOnSaveState,
        inputText, 
        setInputText,
        selectedNodeId, 
        setSelectedNodeId,
        saveDataState, 
        setSaveDataState
    }
},[openBox,saveDataState,messageData, saveError, selectedNodeId, onSaveState, inputText ])
    return (
        <MessageContext.Provider value={value }>
            {children}
        </MessageContext.Provider>
    )
 }



export function useMessage() {
    const context = useContext(MessageContext);
    if (!context) {
        throw new Error('`MessageProvider`')
    }
    return context;
}