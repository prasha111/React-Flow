import React from 'react';
import { useState, useContext, useMemo } from "react";


const  MessageContext = React.createContext();
export function MessageProvider({children}){
const [inputText, setInputText] = useState(null);
const [selectedNodeId, setSelectedNodeId] = useState(null);
const [openBox, setOpenBox] = useState(true)
const [onSaveState, setOnSaveState] = useState(false);
const value  =  useMemo(function(){
    return {
        openBox, 
        setOpenBox,
        onSaveState, 
        setOnSaveState,
        inputText, 
        setInputText,
        selectedNodeId, 
        setSelectedNodeId
    }
},[openBox, selectedNodeId, onSaveState, inputText ])
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