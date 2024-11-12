const fs=require("fs")
const myFile = `D:/MY Folder/Naresh IT/UI Full Stack/NodeJS/FS-module.txt`
console.log(fs.readFileSync(myFile,'utf-8'))
// fs.renameSync(myFile,'Data-module.txt')
// fs.renameSync(myFile,'FS-module.txt')

const realPath=fs.realpathSync('FS-module.txt')
console.log(realPath)
const pathExist = fs.existsSync('FS-module.txt')
console.log(pathExist)

// const appendData= fs.createWriteStream('FS_module1.txt')
// appendData.write('\nThis line i am adding using "createWriteStream" method')
// appendData.end()
