const exp=require("express");
const app=exp()

let port=8080;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

app.get("/",(req,res)=>{
    res.send("Root Path");
});

app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params;
    res.send(`Welcome @${username}`);
});

app.get("/apple",(req,res)=>{
    res.send("Apple Path");
});

app.get("/search",(req,res)=>{
    let { q }=req.query;
    res.send(` <h1>search result is : ${q} </h1>`);
});

app.get(/.*/, (req, res) => {
  res.send("This path does not exist.");
});

// app.get("*",(req,res)=>{
//     res.send("This path does not exist.");
// });

// app.use((req,res)=>{
//     console.log("request received");
//     let code="<h1>Hello</h1>"
//     res.send(code);
// });