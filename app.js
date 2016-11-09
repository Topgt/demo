var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var sing = require('./routes/sing');
var db = require('./routes/db');

var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//配置session
app.use(cookieParser('keyboardcat'));
app.use(session({
    cookie: { maxAge: 60 * 1000 },
    secret: 'session',
    key: 'sid',
    resave: true,
    saveUninitialized: true
}));

//过滤器权限分配
// app.use(/(.)*/, function(req, res, next) {
//     var url = req.originalUrl;
//     var reg = /\/src\/views\/login\//;
//     var check = req.session.check;
//     // console.log(req.session);
//     if (check) {
//         next();
//     } else if (reg.test(url)) {
//         // req.session.check = true;
//         next();
//     } else {
//         var err = new Error('没有权限');
//         err.status = 444;
//         next(err);
//     }
// });

app.use('/', routes);
app.use('/users', users);
app.use('/sing', sing);
app.use('/db', db);




//公共的资源，可直接在地址栏中请求
// app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
