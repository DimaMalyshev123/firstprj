const express = require("express");
var mongoose = require('mongoose');
 
mongoose.connect('mongodb://admin:admin\'password@localhost:27017/admin',function (err) {
 
    if (err) throw err;
  
    console.log('Successfully connected');
    alert('ss');
});

const app = express();
app.get("/", function(request, response){
    response.send("<h1>Главная страница</h1>");
    
});
app.get("/about", function(request, response){
     
    response.send("<h1>О сайте</h1>");
});
app.get("/contact", function(request, response){
     
    response.send("<h1>Контакты</h1>");
});
app.get("/main", function(request, response){
     
    response.send("<h1>Main</h1>");
});
app.get("/main3", function(request, response){
     
    response.send(test());
    
});
app.listen(3000);
function test()
{
   return "String";
}