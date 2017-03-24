// @flow

'use strict';

// core packages
import path from 'path';

// node_modules
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import express from 'express';
import favicon from 'serve-favicon';
import morgan from 'morgan';
import sass from 'node-sass-middleware';
import session from 'express-session';
import toobusy from 'toobusy-js';

// local modules
import renderApp from './render-app';

// variables
const app = express();
const port = process.env.PORT || 3000;
const production = process.env.NODE_ENV === 'production';

// application settings
app.set('trust proxy', 1);
app.disable('x-powered-by');

// :remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms
app.use(morgan('short'));

// prevent abuse with rate limiting
app.use((req, res, next) => {
  if (toobusy()) {
    const err = new Error('Too Many Requests'); // 429

    return next(err);
  }

  return next();
});

// compress response
app.use(compression());

// favicon
app.use(favicon(path.join('public', 'favicon.ico')));

// static folders
app.use(express.static('public'));

// sass middleware
app.use(sass({
  src: path.join('public'),
  dest: path.join('public'),
  debug: !production,
  force: true,
  outputStyle: production ? 'compressed' : 'extended',
  sourceMap: true
}));

// process requests
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// parse cookies
app.use(cookieParser());

// simple session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'gokaygurcan.github.io',
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: production
  }
}));

// routes
app.get('/', (req, res) => {
  res.send(renderApp('Gökay Gürcan'));
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found'); // 404

  return next(err);
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = production ? {} : err;

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// start server
const server = app.listen(port, err => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }

  // eslint-disable-next-line no-console
  console.log(`Running on port ${port} ${production ? '(production)' : '(development)'}.`);
});

process.on('SIGINT', () => {
  server.close();
  toobusy.shutdown();
  process.exit();
});
