let express = require('express'),
  path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser');

// not sure which DB to use. hmmmm
// let mongo = require('mongodb');
// let monk = require('monk');
// let db = monk('localhost:27017/nodetest2');

let routes = require('./routes/index'),
  charts = require('./routes./charts'),
  stocks = require('./routes/stocks');

let app = express();

// views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(__dirname + '/public/favicon.png'));
app.use(logger(process.env.NODE_ENV || 'dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/charts', charts);
app.use('/stocks', stocks);

// handle 404s
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// remove stack info for non-dev environments
if (app.get('env') === 'development') {
  app.use(=(err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', { message: err.message, error: err });
  });
} else {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', { message: err.message, error: {} });
  });
}


module.exports = app;
