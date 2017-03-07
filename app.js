const express = require( 'express');
const chalk = require('chalk');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const routes = require('./routes/');
const app = express();
app.use('/', routes);

app.listen(3000, function(){
  console.log('Yes, I am here! :D');
});

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});


// EARLY TESTS

// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };
//
  //boilerplate setup

//
// var middlewareLog = function(req, res) {
//     var reqInfo = req.method + ' ' + req.path + ' ';
//     res.statusCode === 200 ? reqInfo += chalk.green(res.statusCode) : reqInfo;
//     console.log(reqInfo);
// }
//
//
// app.use('/special/', function(req, res){
// 	res.send('You have reached the special area!');
// });
//
// app.get('/', function(req, res){
//   // res.render('index.html', locals);
//   res.render( 'index', {title: 'Hall of Fame', people: [
//         { name: 'Sam'},
//         { name: 'Denise' },
//         { name: 'Fullstack'}
//     ]} );
//
//   middlewareLog(req, res);
//   // res.send('I work in a browser!');
//   }
// )
