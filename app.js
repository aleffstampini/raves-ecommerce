const express = require('express');
const path = require('path')
const app = express();

const home = '../src/app/index';

app.use(express.static(__dirname + '/src/app'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render(home));

app.listen(3000, () => console.log('[init] server is running...'));