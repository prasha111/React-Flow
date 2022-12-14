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

//import { EdgeRemoveChange } from "reactflow";
//import { removeElements } from "react-flow-renderer";
import dagre from "dagre";
import CustomNode from "./CustomNode";
import LeftSidebar from "./LeftSidebar.js";
//import Sidebar from "./Sidebar";
import defaultData from "./KonnectionData1.json";
import Sidebar from "./Sidebar";
import MessageBoxNode from "./messageBoxNode";
import messageSchema from "./messageSchema";
import { useMessage } from "./messageProvider";
import jsonData from "./messageData";

//https://meet.google.com/qtb-isyp-kqy
//https://reactflow.dev/docs/examples/interaction/drag-and-drop/
// const initialNodes = [
//   {
//     id: "1",
//     type: "input",
//     data: { label: "input node" },
//     position: { x: 250, y: 5 },
//   },
// ];

// const nodeTypes = {
//   special: CustomNode,
// };
const inputString = "cnsb dsjdbs";
const nodeTypes = { textUpdater: MessageBoxNode };
const InitialNodesJSON = [{}];
const initialNodes = jsonData;

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
// const initialNodes1  =  [
//   {
//     id: 1,
//     type:'default',
//     position:{ x: 0, y: 0 },
//     data: { label: MessageBoxNode(id) }
//   }
// ]

const drawerWidth = 240;

// const initialElements = [
//   {
//     id: "1",
//     type: "input",
//     data: { label: "Player 1" },
//     position: { x: 250, y: 5 },
//   },
// ];
const nodeTypes1 = { textUpdater: MessageBoxNode };
const style = {
  width: "160px",
  height: "75px",
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  justifyContent: "center",
};

const flowKey = "example-flow";
let id = 2;
const getId = () => `node${id++}`;

//const connectionLineStyle = { stroke: "blue" };

function ReactFlowSpace() {
  // const reactFlowWrapper = useRef(null);
  // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  // const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  // const [reactFlowInstance, setReactFlowInstance] = useState(null);
  // const [elements, setElements] = useState([]);

  // const classes = useStyles();
  const reactFlowWrapper = useRef(null);
  const [rfInstance, setRfInstance] = useState(null);
  const [elements, setElements] = useState([]);
  const [openDetails, setOpenDetails] = useState(false);
  const [openContectInstance, setOpenContectInstance] = useState(false);
  const [currentPlayer, setcurrentPlayer] = React.useState(false);

  const onConnect = (params) => {
    const date = new Date().toDateString();
    params.label = date;
    setElements((els) => addEdge(params, els));
  };
  //const getNodeId = () => `randomnode_${+new Date()}`;
  var elementsList = [];
  var tempElements = defaultData.elements;
  useEffect(() => {
    tempElements.map((element, index) => {
      if (element.source && element.target) {
        elementsList.push(element);
        //console.log(index, element);
      } else {
        var data =
          element.data && element.data.label.props
            ? element.data.label.props
            : {};
        const newNode = {};
        newNode.id = element.id;
        newNode.type = element.type;
        newNode.root = element.root;
        newNode.style = element.style;
        newNode.position = element.position;
        newNode.animated = true;
        newNode.data = {};
        newNode.data.label = MessageBoxNode(data.id);
        elementsList.push(newNode);
      }
    });
    //console.log("elementsList", elementsList);
    setElements((es) => es.concat(elementsList));
    //setElements(elementsList);
  }, [rfInstance]);

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const CustomNewNode = (id, name, image) => {
    return (
      <CustomNode
        id={id}
        name={name}
        image={image}
        onElementClick={onElementClick}
        //removeNode={removeNode}
        //openContactDetails={openContactDetails}
      />
    );
  };
  const onDrop = (event) => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData("application/reactflow");
    const name = event.dataTransfer.getData("name");
    const image = event.dataTransfer.getData("image");
    const position = rfInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });

    const id = getId();

    const newNode = {
      id: id,
      type,
      style,
      position,
      data: { label: CustomNewNode(id, "new", image) },
    };

    if (type) setElements((es) => es.concat(newNode));
  };
  //const {openBox, setOpenBox} =  useMessage();
  const {
    openBox,
    setOpenBox,
    onSaveState,
    setOnSaveState,
    selectedNodeId,
    setSelectedNodeId,
  } = useMessage();
  const onElementClick = (event, element) => {
    setOpenBox(!openBox);
    setSelectedNodeId(element.id);
    console.log(selectedNodeId, "selectedNode", element.id);
    // if(openBox){

    // }

    //setSelectedNodeId(node)
    //setOpenBox(true)
    //console.log(openBox, "openBox")
    // if (element.source && element.target) {
    //   setcurrentPlayer(element);
    //   setOpenContectInstance(true);
    // }
    // if (element && element.data) {
    //   setOpenDetails(true);
    // } else {
    //   setOpenContectInstance(true);
    // }
  };

  useEffect(() => {
    onSave();
    console.log("local storage is set");
  }, [onSaveState]);

  //const [rfInstance, setRfInstance] = useState(null);

  const onLoad = (_reactFlowInstance) => {
    setRfInstance(_reactFlowInstance);
    console.log(reactFlowInstance);
  };
  const onSave = () => {
    //const flow = rfInstance.toObject();
    console.log(edges, "edges");
    //console.log("Result::", JSON.stringify(flow));
    localStorage.clear();
    localStorage.setItem("edgesData", edges);
    var objectNew = {};
    const newFunc = (props) => {
      objectNew[props] = 1;
      return console.log(objectNew, "neww");
    };
    edges.map((component, index) => {
      let sourceNode = component.source;
      let targetNode = component.target;
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
    nodes.map((component, key)=>{
      if(objectNew[component.id] >= 1)
      {}
      else{
        console.log("incomplete")
      }
    })
    console.log(objectNew, "objectData");
    localStorage.setItem("nodesData", nodes);
  };

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
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
