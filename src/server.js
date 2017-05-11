const path    = require('path');
const Express = require('express');
const React   = require('react');
const ReactDOM = require('react-dom')
const { renderToString } = require('react-dom/server');
const { match, RouterContext } = require('react-router');
const routes = require('./routes');
const cookieParser = require('cookie-parser');
const compression = require('compression');

let app = new Express();
app.enable('trust proxy');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './templates'));

app.use(Express.static(path.join(__dirname, '/static')));
app.use(cookieParser());
app.use(compression());

let port = process.env.PORT || 8080;

app.get('*', (req, res) => {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      if (redirectLocation) {
        return res.redirect(301, redirectLocation.pathname + redirectLocation.search);
      }
      let markup;
      if (renderProps) {
        markup = renderToString(<RouterContext {...renderProps}/>);
      } else {
        // TODO: add not found element here
        markup = renderToString(<div>Not found</div>);
        res.status(404);
      }
      return res.render('index', { markup });
    }
  )
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`HTTP service is running on port ${port}`);
  }
});
