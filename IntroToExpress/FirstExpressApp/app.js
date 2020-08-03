var express= require("express");

var app=express();
//root 
app.get("/",function(req,res){
    res.send("Hi Kishan!");
});

app.get("/bye", function(req,res){
    res.send("GoodBye!");
});
//for any random request
app.get("*",function(req,res){
    console.log("Random request");
   res.send("Star"); 
})
//tell express to listen for request (start server)
app.listen(3000, function(){
    console.log("Server listening on port 3000");
});