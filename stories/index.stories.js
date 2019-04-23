/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

const req = require.context('./components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

/* eslint-enable react/react-in-jsx-scope */
