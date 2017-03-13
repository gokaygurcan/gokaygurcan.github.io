// @flow

'use strict';

// node_modules
import compression from 'compression';
import express from 'express';

// local modules
import renderApp from './render-app';

// variables
const app = express();
const isProd = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use('/static', express.static('dist'));
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.send(renderApp('Gökay Gürcan'));
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on port ${PORT} ${isProd ? '(production)' : '(development)'}.`);
});
