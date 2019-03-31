const express=require('express');
const app=express();
var convert=require('xml-js');
var condition=require('./conditions.js')

app.set('view engine','ejs');


app.get('/',function(req,res){
  res.set('Content-Type', 'text/xml');
  xml=condition.response1(req,res);
  res.send(xml);
});

app.listen(3000,function(){
  console.log("Server is listening on port 3000!!");
});
