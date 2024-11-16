const event=require("events")
const eventEmitter=new event()
// OR
// const eventEmitter=new event.EventEmitter()
// Both will work

function handleAdd(){
    console.log("Addition")
}
function handleSubtract(){
    console.log("Subtraction")
}

eventEmitter.on("add",handleAdd)
// eventEmitter.addListener("add",handleAdd)        //We can use of the method "on" or "addListener" because both are same
eventEmitter.removeListener('add',handleAdd) 
eventEmitter.on("subtract",handleSubtract)
eventEmitter.emit("add")
eventEmitter.emit("subtract")

// eventEmitter.removeListener("add",handleAdd)


