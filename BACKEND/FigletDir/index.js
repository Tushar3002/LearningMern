const fig=require("figlet")

fig("Hello TJ &%$*?",function(err,data){
    if(err){
        console.log("Something is Wrong");
        console.dir(err);
        return;
    }
    console.log(data);
});