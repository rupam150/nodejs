const{ readFile , writeFile}= require('fs');
const path =require('path')

const herePath = path.resolve(__dirname,'nodepath','here','here.txt');

readFile(herePath,'utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result)
const res = result ;

writeFile('./nodepath/here/read_Write_Async',`Here is the result from async write parameter : ${res}`,(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log("done with async read and write function ")
    })
})



