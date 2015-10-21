var webpack = require('webpack'),
	WebpackDevServer = require('webpack-dev-server'),
	config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(4000, 'localhost', function(err, result) {
    if (err) {
        console.log(err);
    }
    console.log('server start');
});
