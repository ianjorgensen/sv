var server = require('router').create();
var serve = require('./lib/serve');

var port = process.argv[2] || 9090;

server.get('/', serve.file('./html/splash.html'));

server.get('/preview', serve.file('./html/home.html'));

server.get('/js/*', serve.file('./js/{*}'));

server.get('/css/*', serve.file('./css/{*}'));

server.get('/img/*', serve.image('./img/{*}'));

server.all('*', serve.file('./html/404.html'));

server.listen(port);

console.log('server running on port',port);

process.on('uncaughtException', function(err) { console.log(err.stack) });