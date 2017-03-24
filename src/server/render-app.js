// @flow

'use strict';

// variables
const production = process.env.NODE_ENV === 'production';

const renderApp = (title: string) => `
<!doctype html>
<html>
  <head>
    <title>${title}</title>
    <link rel="stylesheet" href="/css/style.css">
  </head>
  <body>
    <div class="js-app"></div>
    <script src="${production ? '/static/' : `http://localhost:7000/live`}/js/bundle.js"></script>
  </body>
</html>`;

export default renderApp;
