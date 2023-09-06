import express from "express"; //we are importing express

const app =express(); // we are using that express 
const port =3000;

//get method allows us to send request to local server
app.get("/", (req,res)=>{      
   // console.log(req.rawHeaders);  // with the help of rawheaders will get all details about port and on which server site is running
     res.send("hello world!");
})

app.listen(port,()=>{
    console.log('port is running on ${port}') // running server on port 3000
});



