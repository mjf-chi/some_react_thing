const React = require('react');
const ReactDOM = require('react-dom');
const AppRoutes = require('./containers/AppRoutes');

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('content'));
};
