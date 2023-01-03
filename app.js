const express = require('express');
const bodyParser = require('body-parser');
var logger = require('morgan');

const app = express();

const indexRouter = require('./src/routes/index');
const productsRouter = require('./src/routes/products');

app.use(logger('dev')); 
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/src/views'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/products', productsRouter);

app.listen(3000, () => console.log('[init] server is running...'));