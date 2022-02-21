

var express =require("express");  
var app=express();  

var onAboutUs=function(req, res){
    res.send("Chief Mentor :Ravi Tambade");
};
var onDefault=function(req, res){
    res.send("<h1>Fabrikam is a multinational company</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>They Provide internet application for employees to access</li>"+
                    " <li>Human resourse</li>"+
                    " <li>Project management</li>"+
                    " <li>Accounting</li>"+
             "</ol>");
};
app.get("/",onDefault); 
app.get("/aboutus",onAboutUs);  
var server=app.listen(8081);
console.log("Server is running on port 8081");

