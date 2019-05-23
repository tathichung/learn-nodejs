var express = require('express');
var app = express();

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views')
// app.get('/', function(req, res){
//     res.send('Hello word!');
// });

app.get('/', function(req, res){
    res.send('<h1>Hello Chung</h1><a href="/users">User list</a>');
});

app.get('/users', function(req, res) {
    res.send('User list');
});

app.listen(port, function() {
    console.log('Server listening on port' + port);
});