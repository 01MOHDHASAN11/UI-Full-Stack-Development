const event=require("events")
const eventEmitter=new event.EventEmitter()

function handleAdd(){
    console.log("Addition")
}
function handleSubtract(){
    console.log("Subtraction")
}

eventEmitter.on("add",handleAdd)
eventEmitter.on("subtract",handleSubtract)
eventEmitter.emit("add")
eventEmitter.emit("subtract")