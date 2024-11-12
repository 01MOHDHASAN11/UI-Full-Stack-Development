const path= require("path")
const uploadedFile = `D:/MY Folder/Naresh IT/UI Full Stack/JavaScript/src/pictures/Burger.jpg`
if(path.extname(uploadedFile)==".jpg"){
    console.log("File upload successful")
}
else{
    console.log(`Uploading {path.extname(uploadedFile)} extension file is not allowed- You can add only .jpg file`)
}
console.log(`File accessed from ${path.dirname(uploadedFile)}`)                 //Show the directory path
console.log(`File accessed from ${path.basename(uploadedFile)}`)                //Show the file name
console.log(`File accessed from ${path.basename(uploadedFile,'.jpg')}`)         //Removes extension of file
console.log(`File accessed from ${path.extname(uploadedFile)}`)                 //Show extension name
console.log(`File accessed from ${path.join('D:','MY Folder','Naresh IT','UI Full Stack','JavaScript','src','pictures','Burger.jpg')}`)     //Joins multiple path singles into a single path
