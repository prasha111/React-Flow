import { useRef, useCallback, useState } from "react";
import React from "react";
import "./component.css";
import ReactFlow, { useNodesState,useEdgesState, Controls, addEdge } from "reactflow";
import { ReactFlowProvider } from "reactflow";
//https://meet.google.com/qtb-isyp-kqy
//https://reactflow.dev/docs/examples/interaction/drag-and-drop/
const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "input node" },
    position: { x: 250, y: 5 },
  },
];
let id = 0;
const getId = () => `dndnode_${id++}`;

function ReactFlowSpace() {
  const reactFlowWrapper = useRef(null);
  //const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  //const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  //const [reactFlowInstance, setReactFlowInstance] = useState(null);
  //const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
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
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div className="dndflow" style={{
      flexDirection: "column",
      display: "flex",
      flexGrow:"1",
      height: "100%"}}>
    <ReactFlowProvider>
      <div className="reactflow-wrapper" ref={reactFlowWrapper} style={{flexGrow:'1', height:'100%'}}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          fitView
        >
          <Controls />
        </ReactFlow>
      </div>

    </ReactFlowProvider>
  </div>
  );
}

export default ReactFlowSpace;
