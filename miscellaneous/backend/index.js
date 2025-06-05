const express= require("express");
const app=express();
const port = 8080;

app.use(express.urlencoded({extended:true}));// to parse post data
app.use(express.json()); //for json


app.get("/register",(req,res)=>{
    let {user,pass}=req.query;
    res.send(`GET Response. Welcome : ${user}`);
});

app.post("/register",(req,res)=>{
    let {user,pass}=req.body;
    res.send(`POST Response.Welcome : ${user}`);
});

app.listen(port,()=>{
    console.log(`Listening in ${port}`);
});