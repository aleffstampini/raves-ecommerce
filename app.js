const express = require('express');
const bodyParser = require('body-parser');
var logger = require('morgan');

const app = express();

const conn = require('./src/config/connectDatabase');

const indexRouter = require('./src/routes/index');

app.use(logger('dev')); 
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/src/views'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', indexRouter);

app.listen(3000, () => console.log('[init] server is running...'));