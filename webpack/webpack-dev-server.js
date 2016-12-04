var express = require('express');
var webpack = require('webpack');
var path = require('path');

var config = require('./webpack.config.dev');
var compiler = webpack(config);

var port = 3000;
var app = express();

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function onAppListening(err) {
  if (err) {
    console.log(err);
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', port);
  }
});
