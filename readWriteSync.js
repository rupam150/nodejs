const {readFileSync , writeFileSync, write} = require('fs');
const path = require('path');

// const readFile =readFileSync('./node');
// writeFileSync(path.join(di,'write.txt'),`here is the result from readfileSync fileis : ${readFile},{flag:'a'}`)
// console.log(readFile);
const herePath = path.resolve(__dirname,'nodepath','here','here.txt');
console.log(herePath);

const Read = readFileSync(herePath,'utf-8')
writeFileSync(herePath,`Hi i am bieng added here;${Read}`,{flag:'a'});

console.log("Read file after modifications",Read)

//C:\Users\SarmahRu\Desktop\Learning\Node-Js\nodepath\here\here.txt