const express = require( 'express');
const chalk = require('chalk');
const morgan = require('morgan');

const app = express();

app.listen(3000, function(){
  console.log('Yes, I am here! :D');
});

app.get('/', function(req, res){
  middlewareLog(req, res);
  res.send('I work in a browser!');
  }
)

var middlewareLog = function(req, res) {
    var reqInfo = req.method + ' ' + req.path + ' ';
    res.statusCode === 200 ? reqInfo += chalk.green(res.statusCode) : reqInfo;
    console.log(reqInfo);
}

app.use('*/special/*', function(req, res){
  res.send('You have reached the special area!');
});
