const express=require("express");
const app=express();
const path=require("path");

const port = 8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/hello",(req,res)=>{
    res.send("hello");
});

app.get("/rolldice",(req,res)=>{
    let diceVal=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceVal});
});

app.get("/ig/:username",(req,res)=>{
    // const followers=["apple","banana","cup"];
    let { username } = req.params;
    const instadata = require("./data.json");
    const data=instadata[username];
    if(data){
        res.render("insta.ejs",{data});
    }else{
        res.render("error.ejs");
    }
    
});



app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});