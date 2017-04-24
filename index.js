// gokaygurcan.github.io
//
// https://www.gokaygurcan.com/
// MIT © Gökay Gürcan

// core modules
const {createServer} = require('http');
const {parse} = require('url');

// node modules
const next = require('next');
const pathMatch = require('path-match');

// variables
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const route = pathMatch();
const match = route('/projects/:id');

app.prepare().then(() => {
  createServer((req, res) => {
    const {pathname, query} = parse(req.url, true);
    const params = match(pathname);

    if (params === false) {
      return handle(req, res);
    }

    // assigning `query` into the params means that we still
    // get the query string passed to our application
    // i.e. /projects/foo?show-comments=true
    app.render(req, res, '/projects', Object.assign(params, query));
  }).listen(3000, err => {
    if (err) {
      throw err;
    }

    console.log('> Ready on http://localhost:3000');
  });
});
