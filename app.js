var express = require("express");
var app     = express();
var path    = require("path");

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/example1',function(req,res){
  res.sendFile(path.join(__dirname+'/example1.html'));
});
app.get('/example2',function(req,res){
  res.sendFile(path.join(__dirname+'/example2.html'));
});
app.get('/sidebar',function(req,res){
  res.sendFile(path.join(__dirname+'/sidebar.html'));
});


$(document).ready(function() {
$('form').submit(function (evt) {
evt.preventDefault();
var searchTerm = $('#search').val();
// highlight the button
// not AJAX, just cool looking
//$("button").removeClass("selected");$(this).addClass("selected");
// the AJAX part
var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
//var animal = $(this).text();
var flickrOptions = {
tags: searchTerm,
format: "json"
};
function displayPhotos(data) {
var photoHTML = '<ul>';
$.each(data.items,function(i,photo) {
photoHTML += '<li class="grid-25 tablet-grid-50">';
photoHTML += '<a href="' + photo.link + '" class="image">';
photoHTML += '<img src="' + photo.media.m + '"></a></li>';
}); // end each
photoHTML += '</ul>';
$('#photos').html(photoHTML);
}
$.getJSON(flickerAPI, flickrOptions, displayPhotos);
}); // end click
}); // end ready



app.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});
app.listen(3000);
console.log("Running at Port 3000");

//
// var express = require("express");
// var app     = express();
// app.use(express.static(__dirname + '/View'));
// //Store all HTML files in view folder.
// app.use(express.static(__dirname + '/Script'));
// //Store all JS and CSS in Scripts folder.
// app.get('/',function(req,res){
//   res.sendFile('index.html');
//   //It will find and locate index.html from View or Scripts
// });
// app.get('/about',function(req,res){
//   res.sendFile('/about.html');
// });
// app.get('/sitemap',function(req,res){
//   res.sendFile('/sitemap.html');
// });
// app.listen(3000);
// console.log("Running at Port 3000");
//








// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
//
// var index = require('./routes/index');
// var users = require('./routes/users');
//
// var app = express();
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
//
// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', index);
// app.use('/users', users);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
//
// module.exports = app;
