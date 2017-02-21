/**
 * Created by dntsoft on 2017/2/14.
 */
var express = require('express');
var config = require('./server/configure');
app = express();
mongoose = require('mongoose');

app.set('port',process.env.PORT || 3000);
app.set('views',__dirname + '/views');

app = config(app);

//mongoose.connect('mongodb://localhost:27017/weboffice');
//mongoose.connect('mongodb://weboffice:weboffice@ds151289.mlab.com:51289/weboffice');
mongoose.connect('mongodb://heroku_rpv7c11s:ul6cj7me86l1umk756vfv9jps2@ds153709.mlab.com:53709/heroku_rpv7c11s');


mongoose.connection.on('open',function () {
    console.log('Mongoose Connected.');
});

var server = app.listen(app.get('port'),function () {
    console.log('Server up: :'+app.get('port'));
});