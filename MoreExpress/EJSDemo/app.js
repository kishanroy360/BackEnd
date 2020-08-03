 var express= require("express");

 var app=express();

 app.use(express.static("public"));

 app.set("view engine","ejs");

 app.get("/",function(req,res){
    res.render("home");
 });

 app.get("/fall/:thing",function(res,req){
    var thing = res.params.thing;
    req.render("love",{varThing: thing});
 });

 app.get("/posts",function(req,res){
     var posts=[
         {title :"iPhone ", author:"Kishan "},
         {title :"iPad ", author:"Kishan "},
         {title :"iWatch ", author:"Kishan "}
     ];
     res.render("posts",{posts: posts});
 });

 app.listen(3000, function(){
     console.log("Server Started!");
 });