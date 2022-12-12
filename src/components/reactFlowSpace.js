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
} from "reactflow";
import 'reactflow/dist/style.css';

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

const initialNodes = [
  { id: '1', type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 123 } },
];
// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { textUpdater: MessageBoxNode };

const drawerWidth = 240;

const initialElements = [
  {
    id: "1",
    type: "input",
    data: { label: "Player 1" },
    position: { x: 250, y: 5 },
  },
];
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
let id = 0;
const getId = () => `dndnode_${id++}`;


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
  // /const [open, setOpen] = React.useState(false);
  // const [openVideoList, setOpenVideoList] = React.useState(false);
  // const [tabValue, setTabValue] = useState(0);
  // const [addPersonInTree, setAddPersonInTree] = useState(false);

  const onConnect = (params) => {
    const date = new Date().toDateString();
    params.label = date;
    setElements((els) => addEdge(params, els));
  };
  const getNodeId = () => `randomnode_${+new Date()}`;
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
        newNode.data.label = CustomNewNode(data.id, data.name, data.image);
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
      y: event.clientY - reactFlowBounds.top
    });

    const id = getId();

    const newNode = {
      id: id,
      type,
      style,
      position,
      data: { label: CustomNewNode(id,"new", image) }
    };

    if (type) setElements((es) => es.concat(newNode));
  };
  const onElementClick = (event, element) => {
    console.log("element", element);
    if (element.source && element.target) {
      setcurrentPlayer(element);
      setOpenContectInstance(true);
    }
    // if (element && element.data) {
    //   setOpenDetails(true);
    // } else {
    //   setOpenContectInstance(true);
    // }
  };

  // const removeNode = (id) => {
  //   if (rfInstance) {
  //     const flow = rfInstance.toObject();
  //     const selectedNode = flow.elements.filter((els) => els.id === id);
  //     //onElementsRemove(selectedNode);
  //   }

  //   if (elements) {
  //     const selectedNode = elements.filter((els) => els.id === id);
  //     //onElementsRemove(selectedNode);
  //   }
  // };

  // const onElementsRemove = (elementsToRemove) =>
  //   setElements((els) => removeElements(elementsToRemove, els));

  // const onLoad = (_reactFlowInstance) => setRfInstance(_reactFlowInstance);

  // const onSave = () => {
  //   if (rfInstance) {
  //     const flow = rfInstance.toObject();
  //     console.log("Result::", JSON.stringify(flow));
  //     localStorage.setItem(JSON.stringify(flowKey), flow);
  //   }
  //   if (elements) {
  //     console.log("elements::", JSON.stringify(elements));
  //   }
  // };

  // const onDragOver = (event) => {
  //   event.preventDefault();
  //   event.dataTransfer.dropEffect = "move";
  // };

  // const CustomNewNode = (id, name, image) => {
  //   return <CustomNode />;
  // };

  // const onDrop = (event) => {
  //   event.preventDefault();
  //   const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
  //   const type = event.dataTransfer.getData("application/reactflow");
  //   const name = event.dataTransfer.getData("name");
  //   const image = event.dataTransfer.getData("image");
  //   const position = rfInstance.project({
  //     x: event.clientX - reactFlowBounds.left,
  //     y: event.clientY - reactFlowBounds.top,
  //   });

  //   const id = getId();

  //   const newNode = {
  //     id: id,
  //     type,
  //     style,
  //     position,
  //     data: { label: CustomNewNode(id, name, image) },
  //   };

  //   if (type) setElements((es) => es.concat(newNode));
  // };

  // const onElementClick = (event, element) => {
  //   console.log("element", element);
  //   if (element.source && element.target) {
  //     setcurrentPlayer(element);
  //     setOpenContectInstance(true);
  //   }
  //   if (element && element.data) {
  //     setOpenDetails(true);
  //   } else {
  //     setOpenContectInstance(true);
  //   }
  // };

  // const openContactDetails = (id) => {
  //   if (id && rfInstance) {
  //     const flow = rfInstance.toObject();
  //     const selectedNode = flow.elements.filter((els) => els.id === id);
  //     setcurrentPlayer(selectedNode[0]);
  //     setOpenDetails(true);
  //   }
  //setcurrentPlayer(element);
  //if (element && element.data) {

  //} else {
  //   setOpenContectInstance(true);
  //}
  // };

  // const resetStatus = () => {
  //   setAddPersonInTree(false);
  // };

  //  const onLayout = useCallback(
  //    (direction) => {
  //      const layoutedElements = getLayoutedElements(elements, direction);
  //      setElements(layoutedElements);
  //    },
  //    [elements]
  //  );
  // const dagreGraph = new dagre.graphlib.Graph();
  // dagreGraph.setDefaultEdgeLabel(() => ({}));

  // const getLayoutedElements = (elements, direction = "TB") => {
  //   const isHorizontal = direction === "LR";
  //   dagreGraph.setGraph({ rankdir: direction });
  //   elements.forEach((el) => {
  //     if (isNode(el)) {
  //       dagreGraph.setNode(el.id, { width: 200, height: 350 });
  //     } else {
  //       dagreGraph.setEdge(el.source, el.target);
  //     }
  //   });
  //   dagre.layout(dagreGraph);
  //   return elements.map((el) => {
  //     if (isNode(el)) {
  //       const nodeWithPosition = dagreGraph.node(el.id);
  //       el.targetPosition = isHorizontal ? "left" : "top";
  //       el.sourcePosition = isHorizontal ? "right" : "bottom";
  //       // unfortunately we need this little hack to pass a slighltiy different position
  //       // in order to notify react flow about the change
  //       el.position = {
  //         x: nodeWithPosition.x + Math.random() / 1000,
  //         y: nodeWithPosition.y
  //       };
  //     }
  //     return el;
  //   });
  // };

  // const dagreGraph = new dagre.graphlib.Graph();
  // dagreGraph.setDefaultEdgeLabel(() => ({}));

  // const getLayoutedElements = (elements, direction = "TB") => {
  //   const isHorizontal = direction === "LR";
  //   dagreGraph.setGraph({ rankdir: direction });
  //   elements.forEach((el) => {
  //     if (isNode(el)) {
  //       dagreGraph.setNode(el.id, { width: 200, height: 350 });
  //     } else {
  //       dagreGraph.setEdge(el.source, el.target);
  //     }
  //   });
  //   dagre.layout(dagreGraph);
  //   return elements.map((el) => {
  //     if (isNode(el)) {
  //       const nodeWithPosition = dagreGraph.node(el.id);
  //       el.targetPosition = isHorizontal ? "left" : "top";
  //       el.sourcePosition = isHorizontal ? "right" : "bottom";
  //       // unfortunately we need this little hack to pass a slighltiy different position
  //       // in order to notify react flow about the change
  //       el.position = {
  //         x: nodeWithPosition.x + Math.random() / 1000,
  //         y: nodeWithPosition.y
  //       };
  //     }
  //     return el;
  //   });
  // };
  //const reactFlowWrapper = useRef(null);
  //const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const onConnect1 = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const onDragOver1 = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop1 = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
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
        edges,
        data: { value: 123 }
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  )
  return (
    <ReactFlowProvider>
    
      <div className="reactflow-wrapper" ref={reactFlowWrapper} style={{width:'100%', height:'100vh'}} >
        <ReactFlow
   
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect1}
          onInit={setReactFlowInstance}
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
