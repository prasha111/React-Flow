import React from "react";
import "./component.css";
import { useState, useRef, useCallback, useEffect } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  isNode,
  Background,
  useNodesInitialized,
} from "reactflow";
import "reactflow/dist/style.css";

import dagre from "dagre";
import LeftSidebar from "./LeftSidebar.js";
import Sidebar from "./Sidebar";
import MessageBoxNode from "./messageBoxNode";

import { useMessage } from "./messageProvider";
import jsonData from "./messageData";

const inputString = "cnsb dsjdbs";
const nodeTypes = { textUpdater: MessageBoxNode };
const InitialNodesJSON = [{}];
const initialNodes = jsonData;

const nodeTypes1 = { textUpdater: MessageBoxNode };

const flowKey = "example-flow";
let id = 2;
const getId = () => `node${id++}`;

function ReactFlowSpace() {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [rfInstance, setRfInstance] = useState(null);
  const [localStorageState, setLocalStorageState] = useState(true);
  const {
    openBox,
    setOpenBox,
    onSaveState,
    setOnSaveState,
    selectedNodeId,
    setSelectedNodeId,
    saveDataState,
    setSaveDataState,
  } = useMessage();
  const onElementClick = (event, element) => {
    setOpenBox(!openBox);
    setSelectedNodeId(element.id);
    console.log(selectedNodeId, "selectedNode", element.id);
    // if(openBox){

    // }
  };

  useEffect(() => {
    onSave();
    console.log("local storage is set");
  }, [onSaveState]);

  const onLoad = (_reactFlowInstance) => {
    setRfInstance(_reactFlowInstance);
    console.log(reactFlowInstance);
  };
  const onSave = () => {
    //const flow = rfInstance.toObject();
    console.log(edges, "edges");
    //console.log("Result::", JSON.stringify(flow));

    var objectNew = {};
    const newFunc = (props) => {
      objectNew[props] = 1;
      return console.log(objectNew, "neww");
    };
    edges.map((component, index) => {
      if (objectNew[component.source]) {
        objectNew[component.source] += 1;
      }
      if (objectNew[component.target]) {
        objectNew[component.target] += 1;
      }
      if (!objectNew[component.source]) {
        objectNew[component.source] = 1;
      }
      if (!objectNew[component.target]) {
        objectNew[component.target] = 1;
      }
    });
    nodes.map((component, key) => {
      if (objectNew[component.id] >= 1) {
        setSaveDataState(true);
      } else {
        setSaveDataState(false);
        console.log("incomplete");
        console.log(saveDataState);
      }
    });
    console.log(saveDataState, "save");
    if (saveDataState) {
      localStorage.clear();
      console.log(objectNew, "objectData");
      localStorage.setItem("nodesData", nodes);
      localStorage.setItem("edgesData", edges);
    }
  };

  const onConnect1 = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver1 = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop1 = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type: "textUpdater",
        position,
        data: { value: inputString },
      };
      jsonData.push(newNode);
      setNodes((nds) => nds.concat(jsonData));

      //jsonData((nds) => nds.concat(json))
    },
    [reactFlowInstance]
  );

  const functionClick = (event, element) => {
    setOpenBox(!openBox);
  };

  return (
    <ReactFlowProvider>
      <div
        className="reactflow-wrapper"
        ref={reactFlowWrapper}
        style={{ width: "100%", height: "100vh" }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect1}
          onInit={setReactFlowInstance}
          onNodeClick={onElementClick}
          onLoad={onLoad}
          //onElementClick={onElementClick}
          onDrop={onDrop1}
          onDragOver={onDragOver1}
          nodeTypes={nodeTypes1}
          fitView
        >
          <Controls />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}

export default ReactFlowSpace;
