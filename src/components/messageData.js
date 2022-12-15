import MessageBoxNode from './messageBoxNode';
const inputString = "cnsb dsjdbs"
const nodeTypes = { textUpdater: MessageBoxNode };
const jsonData =  [
        {
            "id": "node1",
            "type": "textUpdater",
            "position": { x: 0, y: 0},
            "data": { "value": "Enter your message here"}
        }
    ]
export default jsonData;