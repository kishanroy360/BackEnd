var express= require("express");

var app=express();

//home page
app.get("/",function(req,res){
    res.send("Hi there! Welcome to my assignment!");
});

app.get("/speak/:title", function(req,res){
    res.send("U have an " + req.params.title);
});

app.get("/repeat/:title/:nums", function(req,res){
    var str=req.params.title;
    //var times=req.params.nums;
    //var num=Number(times);
    res.send(str+ " " );
    // for(var i=0;i<num;i++){
    //     res.send(str+ " ");
    // }
});

app.get("*",function(req,res){
    res.send("No page Found!!!!");
})

app.listen(3000,function(){
    console.log("Server Started!!");
});
