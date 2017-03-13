// @flow

'use strict';

const renderApp = (title: string) => `
<!doctype html>
<html>
  <head>
    <title>${title}</title>
    <link rel="stylesheet" href="/static/css/style.css">
  </head>
  <body>
    <h1>${title}</h1>
  </body>
</html>`;

export default renderApp;
