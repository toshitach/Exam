var express = require('express');
var app = express();



var customerController=function (req, res) {
  console.log("CAlling rest api");
  var customers=[
  {customername:'keshav',Balance:1234,Country:'India'},
  {customername:'Radha',Balance:1334,Country:'India'},
  {customername:'Rajesh',Balance:12354,Country:'Australia'},
  {customername:'john',Balance:11234,Country:'Germany'},
  {customername:'rahi',Balance:12344,Country:'UK'}
  ];
  res.send(customers);
};



app.get('/customers',customerController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8088", host, port)
})