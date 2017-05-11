const React = require('react');
const { Route, IndexRoute } = require('react-router');
const Main = require('./containers/Main');
const Home = require('./containers/views/Home');

module.exports = (
  <Route path="/" component={ Main }>
    <IndexRoute component={ Home }/>
  </Route>
);
